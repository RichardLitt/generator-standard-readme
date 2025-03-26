#!/usr/bin/env node

import { join } from 'node:path'
import { createEnv } from 'yeoman-environment'

const env = createEnv()
env.register(join(import.meta.dirname, '/index.js'), 'standard-readme:app')
await env.run('standard-readme:app')
