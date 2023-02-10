# H4G2023 Backend

Utilises the following techstacks:
* Firebase functions
* Firestore
* Express
* Firebase authentication

## Setup and installation
1. cd into the backend folder
1. run `npm install` to install dependencies
1. run `firebase serve` to serve functions locally

## API Documentation

| **Route**                  | **Method** | **Request**                                | **Response**                              | **Description**                           |
|----------------------------|------------|--------------------------------------------|-------------------------------------------|-------------------------------------------|
| /courses                   | GET        | -                                          | course[]                                  | Gets all courses                          |
| /courses/:id               | GET        | -                                          | course                                    | Gets course of given id                   |
| /courses                   | POST       | { name, description }                      | course                                    | Adds a new course                         |
| /courses/:id               | DELETE     | -                                          | course                                    | Deletes course of given id                |
| /courses/:id               | PATCH      | course (fields optional)                   | course                                    | Updates a course of given id              |
| /courses/:id/participation | POST       | -                                          | { join: true }                            | Join course of given id                   |
| /courses/:id/participation | DELETE     | -                                          | { join: false }                           | Leave course of given id                  |
| /courses/:id/users         | GET        | -                                          | user[]                                    | Gets all users in a course                |
| /courses/:id/message       | POST       | { message }                                | message                                   | Creates a message in the course           |
| /courses/:id/message       | GET        | ?earliest=1676053411580&limit=5            | { earliest, latest, messages: message[] } | Retrieves series of messages              |
| /users/login               | POST       | {email, password}                          | { token }                                 | Retrieves login token                     |
| /users                     | GET        | -                                          | user                                      | Gets logged in user details               |
| /users                     | POST       | {name, email, password}                    | { token }                                 | Creates account and retrieves login token |
| /users                     | PATCH      | {name?, type?, street?, sex?, disability?} | { message }                               | Updates user details                      |
| /users/courses             | GET        | -                                          | course[]                                  | Get all courses that user joined          |
| /reviews/:courseId         | POST       | { comment, stars }                         | review                                    | Adds a new review for the given course    |
| /reviews/:id               | DELETE     | -                                          | review                                    | Deletes review of given id                |
| /reviews/:id               | PATCH      | review (fields optional)                   | review                                    | Updates a review of given id              |
| /reviews/:id               | GET        | -                                          | review                                    | Get the review with given id              |