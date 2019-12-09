# Environment Setup
## Questions to ask
- Who's using their own laptop?
  - Mac, Windows or Linux?
- Who is working on the workstations?
  - Do you have a system to work on at home?

## If you're working on your own system
Install the following software. If one is already installed, check the version and compare it to the latest stable release. Ask you instructor before you update/upgrade.
- VirtualBox
- Vagrant
- Git
SAIT workstations will have this software installed already.

## Setup Vagrant
1. Create a local folder on your C: drive called 'vagrant'
2. Using Git Bash or similar command line interface to navigate to this (probably empty) directory on your file system.
3. clone this git repo: https://github.com/acidtone/node-express-mongodb
4. `$ vagrant up`
5. `$ vagrant ssh`

## Rebuild Vagrant
1. `$ vagrant global-status`
2. Copy and paste the box id of the vagrant box you're rebuilding
3. `$ vagrant destroy [box-id]`
4. `$ vagrant up`

## Installing Express
Vagrant doesn't like the symlinks that some node modules (like express) use so you will need to install it with the --no-bin-link flag:
`$ npm install express --no-bin-link`
This will not be needed for most modules (generally ones that don't come with a cli client) but you will need to use this flag if you run into a 'sym-link' error.

## Initializing a new Express app
1. Browse to the app directory
  - name this directory the same as your app name (this sets app name default for `npm init`)
  - create an app.js file in this directory (this sets the entry point default for `npm init`)
2. `npm init`
3. Fill in the information for the wizard (defaults are usually ok)
4. Install Express:
5. `npm install express --save --no-bin-link`
6. `npm install ejs --save` (or `pug`)
7. `npm install dotenv --save`

For MongoDB
1. `npm install mongodb --no-bin-link --save`
