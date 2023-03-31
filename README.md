# Building a High School Portal API with Express and Mongoose

This is an example of how to use Express and Mongoose to build a simple API for a high school portal.

## Prerequisites
1. Node.js installed on your machine
2. A MongoDB database
3. Basic knowledge of JavaScript and Node.js
## Installation
1. Clone this repository to your local machine
2. Navigate to the root directory of the project
3. Install dependencies using npm install
## Usage
1. Set up a MongoDB database and provide the connection URI in `config/database.js`
2. Start the server using` npm run start`
3. Use a tool such as Postman to interact with the API endpoints
## Structure
The code is organized using the MVC (Model-View-Controller) pattern, separating the code into models, controllers, and routes. Middleware functions are defined in a separate middleware folder.

## Models
1. `student.js`: Defines the schema for a student object, including their name, email, and class ID.
2. `class.js`: Defines the schema for a class object, including the class name and a list of student IDs.
3. `result.js`: Defines the schema for a result object, including the student ID, class ID, and score.
## Controllers
1. `studentController.js`: Implements CRUD functionality for managing students.
2. `classController.js`: Implements CRUD functionality for managing classes.
3. `resultController.js`: Implements CRUD functionality for managing results.
## Routes
1. `studentRoutes.js`: Defines the routes for managing students.
2. `classRoutes.js`: Defines the routes for managing classes.
3. `resultRoutes.js`: Defines the routes for managing results.
## Middleware
1. `logger.js`: Defines a middleware function to log requests to the console.
