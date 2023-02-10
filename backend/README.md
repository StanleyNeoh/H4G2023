# API documentation

## Course collection
> Handles CRUD on courses
```json
{
    "id": "string",
    "name": "string",
    "description": "string"
}
```

| **Route**       | **Method** | **Request**              | **Response** | **Exceptions**  | **Description**              |
|-----------------|------------|--------------------------|--------------|-----------------|------------------------------|
| /api/course     | GET        | -                        | course[]     | -               | Gets all courses             |
| /api/course/:id | GET        | -                        | course       | 404 - Not found | Gets course of given id      |
| /api/course     | POST       | course (without id)      | course       | -               | Adds a new course            |
| /api/course/:id | DELETE     | -                        | course       | -               | Deletes course of given id   |
| /api/course/:id | PATCH      | course (fields optional) | course       | -               | Updates a course of given id |