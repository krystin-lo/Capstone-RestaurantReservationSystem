# Capstone Project - Restaurant Reservation System

This capstone is an application that caters to restaurants and fufills their needs for a reservation systems. The software is used only by restaurant personnel when a customer calls to request a reservation. At this point, the customers will not be able to access the system online.  

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
This application was developed with HTML, CSS, JavaScript, React, PostgreSQL, Express, and Knex.

## Installation
1. Fork and clone this repository.
2. Run cp ./back-end/.env.sample ./back-end/.env.
3. Update the ./back-end/.env file with the connection URL's to your ElephantSQL database instance.
4. Run cp ./front-end/.env.sample ./front-end/.env.
5. You should not need to make changes to the ./front-end/.env file unless you want to connect to a backend at a location other than http://localhost:5000.
6. Run npm install to install project dependencies.
7. Run npm run start:dev to start your server in development mode.

