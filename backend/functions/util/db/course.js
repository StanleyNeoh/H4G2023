const { db } = require('../admin');

const coursesName = "courses";
const coursesCollection = db.collection(coursesName);

async function getCourse(id) {
    const doc = await coursesCollection.doc(id).get();
    if (!doc.exists) return null;
    const course = doc.data();
    course.id = doc.id;
    return course;
}

async function isOwner(uid, courseId) {
    const course = await getCourse(courseId);
    return uid == course.ownerUid;
}

async function getAllCourses() {
    const snapshot = await coursesCollection.get();
    const courses = [];
    snapshot.forEach((doc) => {
        const course = doc.data()
        course.id = doc.id;
        courses.push(course);
    });
    return courses;
}

async function addCourse(ownerUid, courseDetails) {
    const { id } = await coursesCollection.add({...courseDetails, ownerUid});
    return await getCourse(id);
}

async function deleteCourse(id) {
    const course = await getCourse(id);
    const res = await coursesCollection.doc(id).delete();
    console.log(res);
    return course;
}

async function updateCourse(id, updates) {
    await coursesCollection.doc(id).update(updates);
    return await getCourse(id);
}


module.exports = {
    coursesName,
    coursesCollection,
    getCourse,
    isOwner,
    getAllCourses,
    addCourse,
    deleteCourse,
    updateCourse,
}