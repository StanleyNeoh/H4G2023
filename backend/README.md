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

##

| **Route**    | **Method** | **Request**                                           | **Response** | **Description**                           |
|--------------|------------|-------------------------------------------------------|--------------|-------------------------------------------|
| /course      | GET        | -                                                     | course[]     | Gets all courses                          |
| /course/:id  | GET        | -                                                     | course       | Gets course of given id                   |
| /course      | POST       | { name, description }                                 | course       | Adds a new course                         |
| /course/:id  | DELETE     | -                                                     | course       | Deletes course of given id                |
| /course/:id  | PATCH      | course (fields optional)                              | course       | Updates a course of given id              |
| /user/login  | POST       | {email, password}                                     | { token }    | Retrieves login token                     |
| /user        | GET        | -                                                     | user         | Gets logged in user details               |
| /user/signup | POST       | {name, email, password}                               | { token }    | Creates account and retrieves login token |
| /user/update | PATCH      | {name?, password?, type?, street?, sex?, disability?} | { message }  | Updates user details                      |