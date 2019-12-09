# Chapter 06
## Tool Time
- shortened bash prompt?
  - ref: https://unix.stackexchange.com/questions/129143/what-is-the-purpose-of-bashrc-and-how-does-it-work
  - ref: https://askubuntu.com/questions/145618/how-can-i-shorten-my-command-line-bash-prompt
- Pull Request Review

## POST requests
- background: character encoding
  ref: https://www.tutorialspoint.com/html/html_url_encoding.htm
- enctypes we care about
  - application/x-www-form-urlencoded
  - multipart/form-data
  - text/plain (html5 - no encoding)
  - ref: https://dev.to/sidthesloth92/understanding-html-form-encoding-url-encoded-and-multipart-forms-3lpa
- urlencoded vs json
- lexical environment of express.urlencoded
- form vs postman
- ref: https://flaviocopes.com/express-post-query-variables/
- HTML5 and PUT, DELETE, PATCH

## Tool Time Activity: Connecting to MongoDB Atlas

# Slide Synopsis
## MVC
- introduction to mvc
- Example: Basic CMS
- Activity: Restructure your app

## Mongoose
- setting up mongoose
- create a post model
- Activity: add a title field to your post model
- addin logic
- Activity: create a postController
- postController
  - create posts
  - updating your app.post statement
- Activity: test it!
- displaying errors
  - displaying errors in pug file
  - Activity: display error message
  - unique slugs
  - Activity: unique
  - custom validation
  - Activity: custom validation
- sanitize input
- postController: display posts
- displaying posts in blog.pug
- Activity: test it!
- displaying single pages
  - route
  - controller
  - view
Activity: test your single post page