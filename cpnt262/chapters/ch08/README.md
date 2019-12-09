# Chapter 08
## Tool Time: Command line arguments
- ref: https://flaviocopes.com/node-cli-args/

## Navigating Mongo Atlas
Tour:
- Database Access
  - read/write, not admin
- Network Access
  - do NOT whitelist all IPs
- clusters
  - connection
  - collections
    - dbs
    - collections
    - records

## Mongo CRUD operations
- setting collections
- creating collections
- insertOne
- install fixture
- insertMany

## Mongoose Intro
- ref: https://mongoosejs.com/docs/
- ref: https://mongoosejs.com/docs/models.html

# Slide Synopsis
## Linking Collections
- update post.js
- update postController.js
- Activity: new blog posts
- update blog.pug
- create a route for author pages
- displayPostsByUser
- blog-author.pug
- Activity: test the new author page

## Storing Sensitive Information
- introduction to secrets and keys
- dotenv
- setting up dotenv
- Activity: replace sensitive information

## Migrate Database to MongoDB Atlas
- create a starter cluster
- whitelist connections
- create a mongodb user
- choose a connection method
- export mongodb data as json
- import data
- connect your application
- Activity: test your application
- 