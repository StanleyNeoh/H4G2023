const express = require('express');
const isAuth = require('../util/auth/auth');

const {
    getReview,
    getAllReviews,
    addReview,
    deleteReview,
    updateReview,
    getAllCourseReviews,
} = require('../util/db/review');

const {
    getCourse
} = require('../util/db/course');

const router = express.Router();

router.use(isAuth);

router.post('/:courseId', async (req, res, next) => {
    const course = await getCourse(req.params.courseId); 
    if (course == null) {
        return res.status(400).json({message: "Course does not exist"});
    } 

    const newReview = {
        comment: req.body.comment, 
        stars: req.body.stars, 
        userId: req.user.uid, 
        courseId: req.params.courseId
    }

    const review = await addReview(newReview);
    return res.status(201).json(review);
});

router.get('/', async (req, res, next) => {
    const reviews = await getAllReviews()
    return res.status(201).json(reviews);
});

router.get('/course/:courseId', async (req, res, next) => {
    const course = await getCourse(req.params.courseId); 
    if (course == null) {
        return res.status(400).json({message: "Course does not exist"});
    } 

    const courseReviews = await getAllCourseReviews(req.params.courseId);
    return res.status(201).json(courseReviews);
});

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const review = await getReview(id);
        return res.status(201).json(review);
    } catch(e) {
        return res.status(404).send(e);
    }
});

router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    const review = await deleteReview(id);
    return res.status(204).json(review);
});

router.patch('/:id', async (req, res, next) => {
    const { id } = req.params;
    const updates = req.body;
    const review = await updateReview(id, updates);
    return res.status(200).json(review);
});


module.exports = router;
