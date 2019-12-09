# Chapter 10
## Tool time
- reprovision for node 12

## Anatomy of an Express app
### build checklist
- add project folder and create app.js (empty)
- npm init
- install dependencies
  - express
  - mongoose
  - dotenv
  - ejs
- boot express
- set home page
- install middlewares
  - urlencoded/json: needed only for post requests
  - static
  - catch 404s
- set and list server:port
- boot mongoose
  - set .env
  - create and set connection
  - /models -> routes
- define routes
  - GET "/"
  - GET "/definitions"
  - GET "/defintions/new"
  - POST "/definitions"

## Lab time
- 