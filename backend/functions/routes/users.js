var express = require('express');
var router = express.Router();
var isAuth = require('../util/auth/auth');
var { getAllJoinedCourses } = require('../util/db/user_course');
var { 
    addUser,
    updateUser,
    getUser,
} = require('../util/db/user');

var { validateSignUpData, validateLoginData } = require('../util/auth/validators');
var { initializeApp }  = require("firebase/app")
var { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth} = require('firebase/auth');

const config = require('../util/config.json');
const firebase = initializeApp(config);
const auth = getAuth(firebase);

// Login
router.post('/login', async (req, res, next) => {
    const { email, password } = req.body;
    const { valid, errors } = validateLoginData({ email, password });
	if (!valid) return res.status(400).json(errors);

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const token = await userCredential.user.getIdToken();
        res.json({ token });
    } catch (err) {
        res.status(403).json({ general: 'wrong credentials, please try again'});
    }
});

// Sign up 
router.post('/', async (req, res) => {
    const { name, email, password } = req.body;
    const { valid, errors } = validateSignUpData({ name, email, password });
	if (!valid) return res.status(400).json(errors);

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const token = await userCredential.user.getIdToken();
        const user = { name, email };
        await addUser(userCredential.user.uid, user);
        res.status(201).json({ token });
    } catch(err) {
        console.error(err);
        if (err.code === 'auth/email-already-in-use') {
            return res.status(400).json({ email: 'Email already in use' });
        } else {
            return res.status(500).json({ general: 'Something went wrong, please try again' });
        }
    }
});

// Update profile 
router.patch('/', isAuth, async (req, res, next) => {
    try {
        const { uid } = req.user;
        const { name, type, street, sex, disability } = req.body;
        await updateUser(uid, { name, type, street, sex, disability });
        res.json({message: "User profile is updated"});
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Error in updating"
        })
    }
});


// Get profile 
router.get('/', isAuth, async (req, res, next) => {
    try {
        const { uid } = req.user;
        const user = await getUser(uid);
        if (user == null) return res.status(201).json({ message: "User does not exist"});
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ general: "Something is wrong, please try again"});
    }
});

router.get('/courses', isAuth, async (req, res, next) => {
    const { uid } = req.user;
    const courses = await getAllJoinedCourses(uid);
    res.json(courses);
})

module.exports = router;
