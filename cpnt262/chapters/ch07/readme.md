# Chapter 07

## Git: Private Repos and authentication
See Activity: Burn the Farm

## dotenv
See spoilers app

- documentation: https://www.npmjs.com/package/dotenv
- ref: https://medium.com/@thejasonfile/using-dotenv-package-to-create-environment-variables-33da4ac4ea8f

## Traditional relational databases

Think of relation DBs as fancy spreadsheets

<<<<<<< HEAD
- ref: https://docs.mongodb.com/manual/reference/mongo-shell/
=======
- objects
  - database (spreadsheet file)
    - tables (spreadsheet tabs)
      - columns (sometimes called fields)
      - rows
    - joins
- contraints
  - data types: what data type the column accepts
  - primary keys: restricts the id of the table (unique, int, etc)
  - check constraints: what values a column can contain
  - foreign keys: relate a column value of one field to the id of another
- CRUD
  - query language
- schemas
- common engines
  - mysql
  - postgresql
  - oracle
  - SQL Server

## MongoDB
- Slides 148-168
- CRUD operations
  - ref: https://docs.mongodb.com/manual/crud/
- Activity: Explore Atlas
  - ref: https://docs.atlas.mongodb.com/
- Sample Data Tour
>>>>>>> 5e51893a93a03a8dea8f8c5b41b8de9a9db6df87

# Slide Synopsis
## Authentication
- introduction to authentication
- install passport
- require new packages
- express-session
- user model
- Activity: create a user model
- creating a sign-up page
- create userController.js
- create routes
- Activity: test user registration
- configuring passport for logging in
- allow users to stay logged in
- more middleware
- create a login form
- add the login post route
- logged in or logged out?
- log out
- Activity: test logging in and log out

## Securing Passwords
- introduction to encryption
- bcryptjs
- Activity: store hashed passwords
- compare passwords
- Activity: new workflow