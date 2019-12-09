# Activity: Menu refactoring
Refactoring code is a common practice in web development. Software is never perfect so good developers will go back and improve or merge code to ensure a better product

Two separate ejs template examples have been done in class:

1. a pageInfo module was created to pass title and description info to their respective templates (see Chapter 4);
2. a menuInfo module that creates a nav menu for all pages.

Let's spend the rest of the afternoon refactoring this code into one module that creates one unified object that your templates can use to:

1. print the title and description for individual pages, AND
2. generate a global navigation menu for the web app's header partial.