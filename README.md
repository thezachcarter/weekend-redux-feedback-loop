# Redux Feedback Loop

## Description

Redux Feedback Loop is a reflection/feedback form modeled after Prime's system. Feedback is collected over 4 views. The feed back is then displayed for review by the user. The user is given the option of starting the process over or submitting their feedback. Upon submission, the app will save the feedback in the database. 

## Installation

1. Create a database named `prime_feedback`,
2. The queries in the `data.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. Enter feedback in the input fields  
2. Inputs must be filled out as requested to advance  
3. Review feedback  
4. "START OVER" to discard current feedback and restart  
5. "SUBMIT" to send your feedback to the database  

## Built With

HTML 5, CSS 3, javaScript, React JS, Redux, Node, Express, Axios, postgreSQL, Material UI, Sweet Alerts
