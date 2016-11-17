#!/usr/bin/env node

const yeoman = require('yeoman-environment')
const path = require('path')
const env = yeoman.createEnv()

env.register(path.join(__dirname, '/index.js'), 'standard-readme:app')

env.run('standard-readme:app')
