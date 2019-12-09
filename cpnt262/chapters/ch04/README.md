# Chapter 04
## Catchup on express introduction

## EJS Introduction
- by default, templates are stored in your app's view folder
- set your default engine with app.set('view engine','ejs')
  - this saves you from needing to include the .ejs when you reference a template
- render your template with app.render(file, object) where the object contains the variables you're passing into the template
- inside the template, you can print a variable with:
  - `<%= variableName %>`
- optional: when there are no html files in your public folder, it is often renamed to 'assets'

## EJS Partials


# Slide Synopsis
## Forms
- sending data
- Activity: create a form
- streams
- post data
- Activity: post data
- express.urlencoded()
- Activity: parse incoming requests
- Activity: end the request

## Template Engines
- what is a template engine
- pug
- from static to dynamic
- Activity: create routes
- learning pug syntax
- Activity: convert to pug
- pug: 404
- Activity: add 404 page

## Interpolating Variables
- introduction to #{}
- iterating over variables

## Layouts
- introduction to templates
- Activity: use layouts

