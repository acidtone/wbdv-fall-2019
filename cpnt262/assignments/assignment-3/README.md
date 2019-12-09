# Assignment #3 - Create user
Worth: 5% of your final mark
Due: Nov 12

## Post request and insert
In this project, you will use the skills and knowledge you've gained to enhance the code you created for Assignment 2.

## Instructions
You may continue with the multi-page website you chose for Assignment 2 or you can start over with a similar webstite.

Build two pages and an endpoint
1. Newsletter subscription page:
  - contains an accessible form with the following fields (and a submit button):
    - name
    - email
    - one checkbox: "I am over 18" (required for brewery websites, for example)
  - on submit:
    - send a POST form request a post endpoint handler (can also be router middleware)
2. Endpoint handler
  - Accepts post data from subscription page
  - inserts a record into MongodDB Atlas via mongoose model such as:
    {
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      }
      adult: {
        type: Boolean, 
        default: false
      }
    }
  - on success: redirects user back to home page with success message
  - on error: redirect back to form

2. Home page:
  - displays a thank you message for subscribing to the newsletter. It can otherwise have content of your choice
  - home page should only display message when redirected from a successful form submit.

All other page requests should return with a 404 error.

## Deliverables and Rubric
One point will be given for each of the following:

- Create subscription form with valid and accessible (valid fieldset/legend and label tags) html/css
- Create a POST endpoint for the subscription form that can accept post data
- Redirect user to home page on success or back to form on error
- dynamically insert a success message into your home page view when redirected from a successful form submission
- using mongoose, insert document into a 'subscribers' collection

## Submission Requirements
### Code structure

Organize your app using the following pattern:

- app.js
- assets
  - /css
  - /images
  - /js
  - no-html-please.txt
- node_modules
  - include your installed dependencies with your project submission (see *Dev environment* below)
- views
  - index.[ejs|pug]
  - /partials
  - etc

### Dev environment
To help your instructor mark your projects efficiently please consider the following when submitting your code to Brightspace:

- name your root project folder (the one that contains app.js, assets, etc) `assignment-3`
- Include your node_modules folder and package.json
- Include your .env file
- DO NOT include a vagrant file or bootstrap script

Zip your root project folder and submit it to Brightspace. Optional: include a link to your repo and/or a live demo of your project.