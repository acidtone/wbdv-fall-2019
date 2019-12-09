# Activity: It's a bug hunt
Help! There's an error in the Chapter 05 spoilers. 
## Sample ticket
### To replicate bug
- start ch05/spoilers/app.js server
- http://localhost:3000/yahoo

### Expected output
  - '404: File Not Found' from 404 middleware

### Current output
  - "Error: Failed to lookup view "yahoo" in views directory"

### Possible fix
Test for the existence of endpoint before endpoint handlers are called? Could this be done as middleware?