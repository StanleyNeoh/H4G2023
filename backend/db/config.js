const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const serviceAccount = require('../serviceAccountKey.json');

const app = initializeApp({
    credential: cert(serviceAccount)
});

const auth = getAuth();
const db = getFirestore();

module.exports = {
    app,
    auth,
    db,
}