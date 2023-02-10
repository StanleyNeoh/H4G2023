const functions = require("firebase-functions");
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
const app = require('express')();
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var userRouter = require('./routes/users');
var courseRouter = require('./routes/course');
var reviewRouter = require('./routes/reviews');

app.use('/users', cors(), userRouter);
app.use('/courses', cors(), courseRouter);
app.use('/reviews', cors(), reviewRouter);

exports.api = functions.https.onRequest(app);
