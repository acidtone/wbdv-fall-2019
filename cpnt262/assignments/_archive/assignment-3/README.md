# Assignment #3 - Login and update profile
## Authentication
In this project, you will use the skills and knowledge you've gained to build a simple login system with a protected "Update Profile" form. This includes the backend functionality to read and write information to/from the user's database profile.

## Pages created
1. /profile: the update profile page
  - it is login protected; requests should redirect to login.html if the user is not logged in
  - if the user is logged in, serve the Update Profile form
  - form fields: name and email (both required) with a submit button
  - on submit:
    - save upated profile info to the database
    - redirect user back to /profile with success message
2. /login: the login page
  - form fields: email, password with submit button
  - on submit:
    - if login successful, redirect to /profile page
    - if login failed, return to /login with error message

All other page requests should return with a 404 error.

## Instructions
- Create the two frontend forms ('/profile' and '/login') with valid and accessible (valid fieldset/legend and label tags) html/css
- Create a POST endpoint for each of these pages in express
- Add the required redirect functionality given the user's login status
- Using passport.js and bcrypt, authenticate or reject the user based on their login information (stored in the database)
- Update the user's profile details when an authenticated user submits the /profile form

### Deliverables and Rubric
One point will be given for each of the following:

- are the frontend forms valid, functioning and accessible?
- Do the POST endpoints successfully accept the form submissions for use elsewhere in the app?
- are the pages redirecting appropriately based on login status? Are the 404 redirects working?
- Is the login form properly authenticating users based on their (encrypted) database credentials?
- Does the profile form properly update a user's information when it's submitted by that user?

You are free to write some/most/all of the backend functionality as middleware if you desire.