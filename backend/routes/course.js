const express = require('express');
const {
    getCourse,
    getAllCourses,
    addCourse,
    deleteCourse,
    updateCourse,
} = require('../db/course');

const router = express.Router();

router.post('/', async (req, res, next) => {
    const course = await addCourse(req.body);
    res.json(course);
});

router.get('/', async (req, res, next) => {
    const courses = await getAllCourses()
    res.json(courses);
});

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const course = await getCourse(id);
        res.json(course);
    } catch(e) {
        res.status(404).send(e)
    }
})

router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    const course = await deleteCourse(id);
    res.json(course);
})

router.patch('/:id', async (req, res, next) => {
    const { id } = req.params;
    const updates = req.body;
    const course = await updateCourse(id, updates);
    res.json(course);
})

module.exports = router;
