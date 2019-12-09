# Final Project – Node.js

*Important*: express routes may require you to use the upgraded vagrant bootstrap.sh included in the root of this repo. After you `vagrant up`, type `vagrant provision` to updgrade (if you can't tell the difference, bootstrap.sh uses apt instead of apt-get).

## Purpose

The Node.js workshop brings together the concepts and skills you have been working on during the past severals days of the course by having you customize a website and add server-side programming enhancements to them. This project focuses on good coding practices, model routing and web server architecture.

This workshop includes the usual goals (accessible forms, semantic html, proper view rendering, etc) as well as the following:

1. To provide practice working on a deadline 
2. To encourage reuse and modification of existing code

## Value of Final Mark

This workshop is worth 35 marks which will make up 35% of your Node.js course mark.

## Due date

This final project is due to be handed in at the end of Nov 14 @ 11:59pm for your instructor to review and mark.

## Directions

In this exercise, you will take the functionality built in your previous assignments/activities  and integrate (refactor or re-write) them into one multi-page website. This site can be one you used in a previous assignment or something new.

## App Deliverables and Rubric

Five points (for a total of 20) will be given for each of the following four deliverables:

### 1. Create a Node Express server (5 points)

It should properly:
- have the following npm modules installed
  - express
  - ejs or pug
  - dotenv
  - mongoose
- process incoming POST data using urlencode (or json, if needed)
- render view templates
- catch 404 requests
- serve static assets
- listen for requests on port 3000

### 2. Re-create/refactor Assignment-3 functionality (5 points)

Refactor the functionality in Assignment 3 so that it uses a middleware route that handles the following endpoints:

- GET   /subscribe
  - serves a form for user input
- GET   /thankyou
  - serves a thank you page on POST success
- POST  /subscribe 
  - process the request body parameters and inserts the data into an Atlas collection

### 3. Build new blog post functionality. (5 points)
Build a new route that serves blog articles both as a list and individually based in its slug. This route should handle the following endpoints:

- GET   /articles
  - serves a list of all posts in the collection
- GET   /articles/:slug
  - serves one post that has a matching slug

Slug: a semantic post id that is based on its title. Semantic slugs have better usability, accessiblity and search opitmization than numeric ids.

### 4. CREATE and RETRIEVE with Mongoose (5 points)
You have been provided with two base models for `users` and `articles`. Use these as starters for the following:

- Open a connection to an Atlas database called `final`
- Connect your models to Atlas collections of the same name (plural)
- Pass these models to their respective routes to help build out your endpoint handlers

## Supplemental Deliverables and Rubric
In addition to the functional portion of this project, 15 total points will be given for these two deliverables:

### 5. Commenting, attribution and documentation (10 points)
A large portion of the final project mark focuses on good coding practice. These marks will be awarded for:
  - annotating shared or attributed code
  - diagnosing bugs
  - TODOs for future potential changes (new functionality, refactoring, etc)
  - attributing code that is not yours (required)
  - providing documentation for devs that might use your code in the future (including you)

Code sharing for this project is permissible only under the following conditions
- all work that is not your own is attributed (i.e. state the source of your code)
- if code is not your own, explain what it does and why you're using it
- regardless of source, keep your code form consistent:
  - code indentation
  - variable names
  - etc

### 6. Upgraded Functionality (5 points)
Great coders go above and beyond to please the client. Include a feature or functionality that is not included in the App Deliverables. It can be functionality covered in class or something you've found in your research. Examples:

- use moment js to add formatted dates to your posts
- add dynamic page navigation and titles to your static templates
- integrate a third party API/module into your app

For your instructor's sanity, please describe (as a comment in your Brightspace submission) what the feature/functionality is and where to find it.

### Bonus points: Authentication (5 points)
Five additional points are available if your Upgraded Functionality is authentication middleware using passport.js or similar module:

- make article route login protected
- add hashed passwords (using bcrypt) to your users model 
- enable routes for login/logout
- add session to remember login status
- optional: create POST handler for registering new users

A maximum of 35 points is possible for this project.

## Submission Requirements
### Organize your app using the following MVC pattern:
- app.js
- assets
  - /css
  - /images
  - /js
  - no-html-please.txt
- models
  - users.js
  - posts.js
- node_modules
  - include your installed dependencies with your project submission (see *Dev environment* below)
- routes
  - users.js
  - posts.js
- views
  - index.[ejs|pug]
  - /partials
  - etc

### Dev environment
To help your instructor mark your projects efficiently please consider the following when submitting your code to Brightspace:

- for your convenience, a build.js file and fixtures directory have been included in final-project-boilerplate which will create a test database for you. It will install successfully with deprecation errors.
- name your root project folder (the one that contains app.js, assets, etc) `final-project`
- Include your node_modules folder and package.json
- Include your .env file
- DO NOT include a vagrant file or bootstrap script

Zip your root project folder and submit it to Brightspace. Optional: include a link to your repo and/or a live demo of your project.

## Marking requirements
Your mark will be based on submitted and functional code based on the point breakdown above. Syntax errors will jeopardize most of your mark (10 marks will still be available for comments). Allowances will be made for code that can be easily corrected but please test, test, and then test some more.
 
