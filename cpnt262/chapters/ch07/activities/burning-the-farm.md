# Activity: Did you push your login creds?
If login credentials are uploaded to git, those creds need to be burned. 

## What's our exposure?
- did you use a password that you use elsewhere?
  - It maybe time to install a password manager
- where did you use them?
  - Atlas db user
    - you'll need to at least change their username/password. probably best to delete it and create another one
  - any others?
- did the creds include connection information?
  - probably
  - do we care?
- is that connection burned? In other words, do you care if people see your collections?
  - I don't

## Making your git repo private (free feature)
The upside: you're free to screw up as you see fit.

BUT you will lose push (and possibly) pull access unless you authenticate first. 

Your options for authentication:

1. use https and type your creds each time
  - There is a way to cache your username and password in a file on your disk (in plain text):
  - ref: https://stackoverflow.com/questions/35942754/how-to-save-username-and-password-in-git/45327254
2. use ssh and set up your private keys
  - this article outlines the steps required to get set up. it's going to require a lot of command line, but you only have to do this once.
  - ref: https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account

To give another dev access to your repo, add them as a Collaborator.

## Instructions
1. Create a GitHub account if you already haven't
2. Create a private repo with a README.md (checkbox when you create)
  - if you don't create a README, GH will show you instructions on how to upload your files
3. Click on Upload Files
  - upload a codebase of your choice (drag and drop into GH)
4. Your choice: clone by https or by ssh? 
5. On home system: `git clone [clone-url]`

## Questions to answer
- Is there a way to save creds when connecting to github over https (so you don't have to type them each time)?
  - *yes!* reference link added above
- Can we create more than one free tier cluster?
- Can we turn off "Whitelist all IPs" if we turn on the VPN?

# Appendix
## MongoDB Atlas
ref: https://docs.atlas.mongodb.com/getting-started/

1. Create MongoDB Atlas account
2. Create cluster
  - I chose AWS N. Oregon
3. Whitelist your IP *fingers crossed*
4. Create project
5. Create user
6. Add sample data
7. run app: ch06/tool-time/app.js
  - npm init
  - npm install express --save --no-bin-link
  - npm install ejs
  - npm install mongodb --save --no-bin-link
  - node app.js

## Deprecation Warning
*solved*
Bonus: find a modern way to connect to Atlas?