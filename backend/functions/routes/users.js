var express = require('express');
var router = express.Router();
var { db, admin, auth } = require('../util/admin');
var authMiddleware = require('../util/auth/auth');
var { getAllJoinedCourses } = require('../util/db/user_course');

var { validateSignUpData, validateLoginData } = require('../util/auth/validators');
var { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth} = require('firebase/auth');

// Login
router.post('/login', function (req, res, next) {
    const user = {
        email: req.body.email,
        password: req.body.password
    }

    const { valid, errors } = validateLoginData(user);
	if (!valid) return res.status(400).json(errors);

    signInWithEmailAndPassword(auth, user.email, user.password)
    .then((data) => {
        return data.user.getIdToken();
    })
    .then((token) => {
        return res.json({ token });
    })
    .catch((error) => {
        return res.status(403).json({ general: 'wrong credentials, please try again'});
    })
});

// Sign up 
router.post('/', function (req, res) {
    const newUser = {
        name: req.body.name,
        email: req.body.email,
		password: req.body.password,
    };

    const { valid, errors } = validateSignUpData(newUser);

	if (!valid) return res.status(400).json(errors);

    let token, userId;
    db
        .doc(`/users/${newUser.email}`)
        .get()
        .then((doc) => {
            if (doc.exists) {
                return res.status(400).json({ email: 'This email already exists' });
            } else {
                return createUserWithEmailAndPassword(auth, newUser.email, newUser.password);
            }
        })
        .then((data) => {
            userId = data.user.uid;
            return data.user.getIdToken();
        })
        .then((idtoken) => {
            token = idtoken;
            const userCredentials = {
                name: newUser.name,
                email: newUser.email,
                password: newUser.password,
                userId: userId
            };
            return db
                    .doc(`/users/${newUser.email}`)
                    .set(userCredentials);
        })
        .then(()=>{
            return res.status(201).json({ token });
        })
        .catch((err) => {
			console.error(err);
			if (err.code === 'auth/email-already-in-use') {
				return res.status(400).json({ email: 'Email already in use' });
			} else {
				return res.status(500).json({ general: 'Something went wrong, please try again' });
			}
		}); 
});


router.use(authMiddleware);

// Update profile 
router.patch('/', function(req, res, next) {
    let user = db.doc(`/users/${req.user.email}`);

    let newInfo = {
        name: req.body.name,
        password: req.body.password,
        type: req.body.type, 
        street: req.body.street, 
        sex: req.body.sex, 
        disability: req.body.disability
    }

    user.update(newInfo) 
    .then(() => {
        return res.json({message: "User profile is updated"});
    })
    .catch((error) => {
        return res.status(500).json({
            message: "Error in updating"
        })
    })
})


// Get profile 
router.get('/', function(req, res, next) {
    let user = {};

    db.doc(`/users/${req.user.email}`)
    .get()
    .then(doc => {
        if (!doc.exists) {
            return res.status(201).json({ message: "User does not exist"});
        }
        user.name = doc.data().name;
        user.email = doc.data().email;
        user.sex = doc.data().sex;
        user.disability = doc.data().disability; 
        user.street = doc.data().street; 
        user.type = doc.data().type == 1 ? "student" : "instructor"
        return res.status(201).json(user);
    })
    .catch(err => {
        return res.status(500).json({ general: "Something is wrong, please try again"});
    })
})

router.get('/courses', async (req, res, next) => {
    const { id } = req.user;
    const courses = await getAllJoinedCourses(id);
    res.json(courses);
})

module.exports = router;
