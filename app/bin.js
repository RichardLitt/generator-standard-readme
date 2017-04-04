#!/usr/bin/env node

const yeoman = require('yeoman-environment')
const path = require('path')
const env = yeoman.createEnv()

env.register(path.join(__dirname, '/index.js'), 'make-readme:app')

env.run('make-readme:app')
