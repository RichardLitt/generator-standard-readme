#!/usr/bin/env node

var yeoman = require('yeoman-environment')
var env = yeoman.createEnv()

env.register(__dirname + '/index.js', 'standard-readme:app')

env.run('standard-readme:app')
