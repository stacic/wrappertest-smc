wrappertest-smc
===============

Playing around with a cli wrapper in node. The idea is to parallel the grunt/grunt-cli workflow:

User installs multiple versions of cordova locally in different directories with 'npm install cordova@<version>'

User then installs wrapper globally with 'npm install -g wrappertest-smc'

Then from any of their cordova projects, user can run the command 'local-cordova <options>' instead of 'cordova <options>', and the wrapper will find the closest install of cordova and pass the options to it.
