const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const serviceAccount = require('../serviceAccountKey.json');

const app = initializeApp({
    credential: cert(serviceAccount)
});

const auth = getAuth();
const db = getFirestore();
var firebaseConfig = {
    apiKey: "AIzaSyD1KRgAaczePfrPGiJWOlNsdc5ePNiNucI",
    authDomain: "h4g2023.firebaseapp.com",
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://h4g2023.firebaseio.com",
    projectId: "h4g2023",
  };

const app = initializeApp(firebaseConfig);

const auth = app.auth();

module.exports = {
    app,
    auth,
    db,
}