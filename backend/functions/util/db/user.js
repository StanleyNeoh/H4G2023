const { db } = require('../admin');

const usersName = "users";
const usersCollection = db.collection(usersName);

async function getUser(uid) {
    const doc = await usersCollection.doc(uid).get();
    if (!doc.exists) return null;
    const user = doc.data();
    user.uid = doc.id;
    return user;
}

async function addUser(uid, userDetails) {
    await usersCollection.doc(uid).set(userDetails);
    return await getUser(uid);
}

async function updateUser(uid, userDetails) {
    await usersCollection.doc(uid).update(userDetails);
    return await getUser(uid);
}

async function deleteUser(uid) {
    const user = await getUser(uid);
    await usersCollection.doc(uid).delete();
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