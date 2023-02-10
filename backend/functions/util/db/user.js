const { db } = require('../admin');

const usersName = "users";
const usersCollection = db.collection(usersName);

async function getUser(id) {
    const doc = await usersCollection.doc(id).get();
    if (!doc.exists) return null;
    const user = doc.data();
    user.id = doc.id;
    return course;
}

async function addUser(id, userDetails) {
    await usersCollection.doc(id).set(userDetails);
    return await getUser(id);
}

async function updateUser(id, userDetails) {
    await usersCollection.doc(id).update(userDetails);
    return await getUser(id);
}

async function deleteUser(id) {
    const user = await getUser(id);
    await usersCollection.doc(id).delete();
    return user;
}

module.exports = {
    usersName,
    usersCollection,
    getUser,
    addUser,
    updateUser,
    deleteUser,
}