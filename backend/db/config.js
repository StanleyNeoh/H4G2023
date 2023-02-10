const { initializeApp } = require('firebase-admin/app');

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
}