const { initializeApp } = require('firebase-admin/app');

const app = initializeApp();
const auth = app.auth();

module.exports = {
    app,
    auth,
}