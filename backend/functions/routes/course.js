const express = require('express');
const isAuth = require('../util/auth/auth');
const {
    getCourse,
    isOwner,
    getAllCourses,
    addCourse,
    deleteCourse,
    updateCourse,
} = require('../util/db/course');

const {
    isUserInCourse,
    joinCourse,
    leaveCourse,
    getAllParticipants,
} = require('../util/db/user_course');

const {
    addMessage,
    getMessages,
} = require('../util/db/message');

const router = express.Router();

// Middleware
async function isOwnerMiddleware(req, res, next) {
    const { uid } = req.user;
    const { id } = req.params;
    if (await isOwner(uid, id)) {
        next();
    } else {
        res.status(403).json({ error: 'Unauthorized (Not Owner)' });
    }
}

async function isParticipantMiddleware(req, res, next) {
    const { uid } = req.user;
    const { id } = req.params;
    if (await isUserInCourse(uid, id)) {
        next();
    } else {
        res.status(403).json({ error: 'Unauthorized (Not Participant)' });
    }
}

// Routes
router.post('/', isAuth, async (req, res, next) => {
    const { uid } = req.user;
    const course = await addCourse(uid, req.body);
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
});

router.delete('/:id', isAuth, isOwnerMiddleware, async (req, res, next) => {
    const { id } = req.params;
    const course = await deleteCourse(id);
    res.json(course);
});

router.patch('/:id', isAuth, isOwnerMiddleware, async (req, res, next) => {
    const { id } = req.params;
    const updates = req.body;
    const course = await updateCourse(id, updates);
    res.json(course);
});

router.post('/:id/participation', isAuth, async (req, res, next) => {
    const courseId = req.params.id;
    const userId = req.user.uid;
    await joinCourse(userId, courseId);
    res.json({ join: true });
});

router.delete('/:id/participation', isAuth, async (req, res, next) => {
    const courseId = req.params.id;
    const userId = req.user.uid;
    await leaveCourse(userId, courseId);
    res.json({ join: false });
});

router.get("/:id/users", async (req, res, next) => {
    const courseId = req.params.id;
    const users = await getAllParticipants(courseId);
    res.json(users);
});

router.post("/:id/messages", isAuth, isParticipantMiddleware, async (req, res, next) => {
    const msg = req.body.message;
    const courseId = req.params.id;
    const uid = req.user.uid;
    const message = await addMessage(uid, courseId, msg);
    res.json(message);
});

router.get("/:id/messages", isAuth, isParticipantMiddleware, async (req, res, next) => {
    const courseId = req.params.id;
    const earliest = parseInt(req.query.earliest);
    const limit = parseInt(req.query.limit);
    const messageChunk = await getMessages(courseId, earliest, limit);
    res.json(messageChunk);
});

module.exports = router;
