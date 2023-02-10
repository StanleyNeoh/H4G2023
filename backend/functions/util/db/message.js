const { db } = require('../admin');

const {
    coursesCollection
} = require('../db/course');
const messageName = "messages";

async function addMessage(uid, id, msg) {
    const message = {
        msg,
        senderUid: uid,
        sentOn: Date.now(),
    }
    await coursesCollection.doc(id).collection(messageName).add(message);
    return message;
}

async function getMessages(id, fromTime, lim) {
    let query = coursesCollection.doc(id).collection(messageName)
    if (fromTime) query = query.where('sentOn', '>', fromTime);
    query = query.orderBy('sentOn');
    if (lim) query = query.limit(lim);
    const snapshot = await query.get();
    const messages = snapshot.docs.map(doc => doc.data());
    const chunk = { messages }
    if (messages.length > 0) {
       chunk['earliest'] = messages[0].sentOn;
       chunk['latest'] = messages[messages.length - 1].sentOn;
    }
    return chunk;
}


module.exports = {
    addMessage,
    getMessages,
}