# Giant Machines Take Home project

## Setup

1. `cd` directory you want to clone this project
2. git clone https://github.com/sandylykova/giant_machines.git
3. Run `npm install`.
4. Create database `giant-machines`.
5. Run `npm start`.
6. Populate your table Projects in your giant-machines database:
   - connect to your database: `\c giant-machines`
   - run command `\copy projects(date, client, project, project_code, hours, billable, first_name, last_name, billable_rate) FROM '/path/to/csv/data.csv' DELIMITER ',' CSV HEADER`. Your data.csv is located in the root folder of the project folder, will look something like: './Users/Biligma/Desktop/gm/data.csv'.
5. Go to http://localhost:8080 to try it out!

Project was build on MacOS build environment.

## Tech Stack

### React
https://reactjs.org/

React is a JavaScript library for building user interfaces.

React will efficiently update and render only the components that need to be rerendered.

React is component-based and allows for each component to manage their own state.

### Redux
https://redux.js.org/

Redux is an open-source JavaScript library for state management.

Redux works together with React Native and Node to build complex user interfaces and retrieve data from the database, while easily managing state.

### Node.js
https://nodejs.org/en/

Node is a JavaScript runtime environment built on Chrome's V8 JavaScript engine

### Express
https://expressjs.com/

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

### PostgreSQL

https://www.postgresql.org/

PostgreSQL is a powerful, open source object-relational database system.

### Sequelize

https://sequelize.org/v4/

Sequelize is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.
