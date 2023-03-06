# Capstone Project - Restaurant Reservation System

The Capstone Restaurant Reservation System is a web application built using the MERN stack (MongoDB, Express.js, React, and Node.js) that allows restaurant owners to manage their reservations, tables, and waitlists.

The repository is structured in a client-server architecture, with the front-end files located in the client folder, and the back-end files located in the server folder.

The client-side code uses React to render the user interface and manages state using Redux. The src folder contains the main React components, such as App.js, which sets up the routes and renders the different pages of the application, and redux folder, which contains the Redux store and reducers.

The server-side code is built with Node.js and Express.js, and uses MongoDB to store the data. The models folder contains the schema definitions for the database entities, such as Reservation and Table, and the routes folder defines the RESTful API endpoints that the client can use to interact with the server.

One of the key features of the application is the reservation system, which allows restaurant owners to manage and track their reservations. Users can create new reservations, edit existing ones, and cancel them if needed. The routes/reservations.js file contains the API endpoints related to reservations, such as GET /reservations to retrieve all reservations, POST /reservations to create a new reservation, and DELETE /reservations/:id to delete a reservation by its ID.

Another important feature is the table management system, which allows restaurant owners to manage the tables in their establishment. Users can create new tables, edit existing ones, and delete them if needed. The routes/tables.js file contains the API endpoints related to tables, such as GET /tables to retrieve all tables, POST /tables to create a new table, and DELETE /tables/:id to delete a table by its ID.

The application also includes a waitlist feature, which allows users to add themselves to a waitlist if there are no available tables. The routes/waitlists.js file contains the API endpoints related to waitlists, such as GET /waitlists to retrieve all waitlists, POST /waitlists to add a new party to the waitlist, and DELETE /waitlists/:id to remove a party from the waitlist by its ID.

Overall, the Capstone Restaurant Reservation System provides a complete solution for restaurant owners to manage their reservations, tables, and waitlists, and showcases the developer's proficiency in the MERN stack and RESTful API design.

## Preview of the Application
#### The dashboard shows new reservations and updated edits to previous reservations
[![us-08-edit-reservation-submit-after.png](https://i.postimg.cc/43fZBH7D/us-08-edit-reservation-submit-after.png)](https://postimg.cc/v4NpmBvh)
#### Reservation fill-out form
[![us-08-edit-reservation-submit-before.png](https://i.postimg.cc/65BX9Gzy/us-08-edit-reservation-submit-before.png)](https://postimg.cc/s1H8mxkr)
#### Workers will have the ability to look for a reservation based off of a customer's phone number
[![us-07-search-reservations-submit-no-result-after.png](https://i.postimg.cc/6pNB4m95/us-07-search-reservations-submit-no-result-after.png)](https://postimg.cc/nCTy6Tj6)
#### Workers will have the ability to add the amount/capacity of a table and customize the name of the table
[![us-04-create-table-submit-before.png](https://i.postimg.cc/CxHSGs1C/us-04-create-table-submit-before.png)](https://postimg.cc/FYRMmc01)

## Technologies Used
This application was developed with HTML, CSS, Node.js, JavaScript, React, PostgreSQL, Express, and Knex.

## Installation
1. Fork and clone this repository.
2. Run cp ./back-end/.env.sample ./back-end/.env.
3. Update the ./back-end/.env file with the connection URL's to your ElephantSQL database instance.
4. Run cp ./front-end/.env.sample ./front-end/.env.
5. You should not need to make changes to the ./front-end/.env file unless you want to connect to a backend at a location other than http://localhost:5000.
6. Run npm install to install project dependencies.
7. Run npm run start:dev to start your server in development mode.

