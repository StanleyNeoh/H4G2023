const { db } = require('../admin');

const userCourseName = "user_courses";
const userCourseCollection = db.collection(userCourseName);
const { getCourse } = require('./course');
const { getUser } = require('./user');

async function getUserCourse(userId, courseId) {
    const doc = await userCourseCollection
        .where("userId", "==", userId)
        .where("courseId", "==", courseId).get();
    if (!doc.exists()) return null;
    return doc.data();
}

async function isUserInCourse(userId, courseId) {
    return await getUserCourse(userId, courseId) != null;
}

async function joinCourse(userId, courseId) {
    if (!await isUserInCourse(userId, courseId)) return;
    await userCourseCollection.add({ userId, courseId });
}

async function leaveCourse(userId, courseId) {
    const userCourse = getUserCourse(userId, courseId);
    if (userCourse == null) return;
    await userCourseCollection.doc(userCourse.id).delete();
}

async function getAllJoinedCourses(userId) {
    const snapshot = await userCourseCollection.where("userId", "==", userId).get();
    const courseIds = [];
    snapshot.forEach(doc => courseIds.push(doc.data()["courseId"]));
    const courses = await Promise.all(courseIds.map(async (id) => {
        return await getCourse(id);
    }));
    return courses;
}

async function getAllParticipants(courseId) {
    const snapshot = await userCourseCollection.where("courseId", "==", courseId).get();
    const userIds = [];
    snapshot.forEach(doc => userIds.push(doc.data()["userId"]));
    const users = await Promise.all(userIds.map(async (id) => {
        return await getUser(id);
    }))
    return users;
}

module.exports = {
    userCourseName,
    userCourseCollection,
    getUserCourse,
    isUserInCourse,
    joinCourse,
    leaveCourse,
    getAllJoinedCourses,
    getAllParticipants,
}