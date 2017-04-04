import path from 'path'
import test from 'ava'
import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import pify from 'pify'
import fs from 'graceful-fs'

let generator

test.beforeEach(async () => {
  await pify(helpers.testDirectory)(path.join(__dirname, 'temp'))
  generator = helpers.createGenerator('standard-readme:app', ['../app'], null, {skipInstall: true})
})

test.serial('generates expected files', async () => {
  helpers.mockPrompt(generator, {
    moduleName: 'test',
    description: 'test'
  })

  await pify(generator.run.bind(generator))()

  assert.file([
    'README.md'
  ])
})

test.serial('generates default file', async () => {
  helpers.mockPrompt(generator, {
    licensee: 'Richard McRichface'
  })

  await pify(generator.run.bind(generator))()

  assert.fileContent('README.md', fs.readFileSync('../examples/default-readme.md').toString())
})

test.serial('generates different as given license', async () => {
  helpers.mockPrompt(generator, {
    licensee: 'Richard McRichface',
    mit: false,
    license: 'CC-BY-SA 3.0'
  })

  await pify(generator.run.bind(generator))()

  assert.fileContent('README.md', fs.readFileSync('../examples/default-readme.md').toString())
})

test.serial('defaults to MIT license', async () => {
  helpers.mockPrompt(generator, {
    licensee: 'Richard McRichface',
    mit: true,
    license: 'CC-BY-SA 3.0'
  })

  await pify(generator.run.bind(generator))()

  assert.fileContent('README.md', fs.readFileSync('../examples/different-license-readme.md').toString())
})

test.serial('generates maximal file', async () => {
  helpers.mockPrompt(generator, {
    API: true,
    background: true,
    badge: true,
    badges: true,
    banner: true,
    bannerPath: 'test',
    contributeFile: true,
    description: 'test',
    license: 'test',
    licensee: 'Richard McRichface',
    longDescription: true,
    maintainers: true,
    mit: true,
    moduleName: 'example',
    prs: true,
    security: true
  })

  await pify(generator.run.bind(generator))()

  assert.fileContent('README.md', fs.readFileSync('../examples/maximal-readme.md').toString())
})
