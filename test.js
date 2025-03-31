import fullName from 'fullname'
import assert from 'node:assert/strict'
import { existsSync, mkdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { beforeEach, describe, test } from 'vitest'
import helpers, { result } from 'yeoman-test'
import Environment from 'yeoman-environment'

import StandardReadmeGenerator from './app'

// Keeping default answers from generator synced with defaults used in tests.
const generator = new StandardReadmeGenerator([], {
  resolved: '',
  namespace: '',
  env: new Environment({ skipInstall: true }),
  'skip-install': true
})
// [{ name , default, ... }, ...] => { [name]: default, ... }
const defaultAnswers = generator.promptQuestions.reduce((acc, curr) => {
  if (Object.hasOwn(curr, 'default')) {
    acc[curr.name] = curr.default
  }
  return acc
}, {})
const testDefaultAnswers = Object.freeze({
  ...defaultAnswers,
  // Default values for the sake of the tests.
  moduleName: 'module-name',
  description: 'description',
  mainMaintainer: 'RichardLitt',
  licensee: 'Richard McRichface',
  year: false,
  diffYear: '2018'
})

describe('standard-readme:app', () => {
  const customTempDir = join(__dirname, './temp')
  const exampleDir = join(__dirname, './examples')
  if (!existsSync(customTempDir)) {
    mkdirSync(customTempDir, { recursive: true })
  }

  /** @type {import('yeoman-test').RunContext} */
  let runContext

  beforeEach(async () => {
    await helpers
      .prepareTemporaryDir({
        cwd: customTempDir
      })
    runContext = result
      .create(join(__dirname, './app'))
      .withAnswers(testDefaultAnswers, { throwOnMissingAnswer: true })
  })

  test('generates default README (given test defaults)', async () => {
    await runContext
      .run()

    assert.strictEqual(
      readFileSync(join(customTempDir, 'README.md')).toString(),
      readFileSync(join(exampleDir, 'default-readme.md')).toString()
    )
  })

  test('generates maximal README when all options/sections are included', async () => {
    await result
      .create(join(__dirname, './app'))
      .withAnswers({
        moduleName: 'example',
        description: 'description',
        banner: true,
        bannerPath: 'test',
        badge: true,
        badges: true,
        longDescription: true,
        security: true,
        background: true,
        API: true,
        mainMaintainer: 'RichardLitt',
        hostedDomain: 'github.com',
        contributingFile: true,
        prs: true,
        mit: true,
        // license: 'CC BY-SA 4.0',
        licensee: 'Richard McRichface',
        year: false,
        diffYear: '2018'
      })
      .run()

    assert.strictEqual(
      readFileSync(join(customTempDir, 'README.md')).toString(),
      readFileSync(join(exampleDir, 'maximal-readme.md')).toString()
    )
  })

  describe('moduleName', () => {
    const newModuleName = 'foo-module-name'

    test('generates README with fallback value (`generator.appname`) when omitted', async () => {
      await runContext
        .withAnswers({
          moduleName: undefined
        })
        .run()

      assert.strictEqual(
        readFileSync(join(customTempDir, 'README.md')).toString(),
        readFileSync(join(exampleDir, 'default-readme.md')).toString()
          .replace(testDefaultAnswers.moduleName, runContext.generator.appname)
      )
    })

    test('generates README with provided moduleName', async () => {
      await runContext
        .withAnswers({
          moduleName: newModuleName
        })
        .run()

      assert.strictEqual(
        readFileSync(join(customTempDir, 'README.md')).toString(),
        readFileSync(join(exampleDir, 'default-readme.md')).toString()
          .replace(testDefaultAnswers.moduleName, newModuleName)
      )
    })

    test('generates README using slugified moduleName', async () => {
      const moduleNames = [
        newModuleName.replace('-', ' '),
        newModuleName.replace('-', '_'),
        newModuleName.toUpperCase()
      ]
      for (const moduleName of moduleNames) {
        // Need to reset test environment to avoid prompt abort error
        // on subsequent loops.
        await helpers.prepareTemporaryDir({
          cwd: customTempDir
        })
        runContext = result
          .create(join(__dirname, './app'))
          .withAnswers(testDefaultAnswers)

        await runContext
          .withAnswers({
            moduleName
          })
          .run()

        assert.strictEqual(
          readFileSync(join(customTempDir, 'README.md')).toString(),
          readFileSync(join(exampleDir, 'default-readme.md')).toString()
            .replace(testDefaultAnswers.moduleName, newModuleName)
        )
      }
    })
  })

  describe('description', () => {
    test('fails to generate README when answer is omitted', async () => {
      const promise = runContext
        .withAnswers({
          description: undefined
        })
        .run()

      await assert.rejects(promise, {
        message: 'yeoman-test: question description was asked but answer was not provided'
      })
    })

    test('generates README with provided description', async () => {
      const newDescription = 'foo description'

      await runContext.withAnswers({
        description: newDescription
      })

      assert.strictEqual(
        readFileSync(join(customTempDir, 'README.md')).toString(),
        readFileSync(join(exampleDir, 'default-readme.md')).toString()
          .replace(testDefaultAnswers.description, newDescription)
      )
    })
  })

  describe('banner/bannerPath', () => {
    test('fails to generate if only banner is true', async () => {
      const promise = runContext
        .withAnswers({
          banner: true
        })
        .run()

      await assert.rejects(promise, {
        message: 'yeoman-test: question bannerPath was asked but answer was not provided'
      })
    })

    test('generates default README if only bannerPath is specified', async () => {
      await runContext
        .withAnswers({
          bannerPath: 'test/banner.png'
        })
        .run()

      assert.strictEqual(
        readFileSync(join(customTempDir, 'README.md')).toString(),
        readFileSync(join(exampleDir, 'default-readme.md')).toString()
      )
    })

    test('generates README with provided banner', async () => {
      await runContext
        .withAnswers({
          banner: true,
          bannerPath: 'test/banner.png'
        })
        .run()

      assert.strictEqual(
        readFileSync(join(customTempDir, 'README.md')).toString(),
        readFileSync(join(exampleDir, 'banner-readme.md')).toString()
      )
    })
  })

  describe('badge/badges', () => {
    test('generates README without badge', async () => {
      await runContext
        .withAnswers({
          badge: false
        })
        .run()

      assert.strictEqual(
        readFileSync(join(customTempDir, 'README.md')).toString(),
        readFileSync(join(exampleDir, 'no-badge-readme.md')).toString()
      )
    })

    test('generates README with badges TODO', async () => {
      await runContext
        .withAnswers({
          badges: true
        })
        .run()

      assert.strictEqual(
        readFileSync(join(customTempDir, 'README.md')).toString(),
        readFileSync(join(exampleDir, 'badges-readme.md')).toString()
      )
    })
  })

  describe('longDescription', () => {
    test('generates README without TODO for long description', async () => {
      await runContext
        .withAnswers({
          longDescription: false
        })
        .run()

      assert.strictEqual(
        readFileSync(join(customTempDir, 'README.md')).toString(),
        readFileSync(join(exampleDir, 'no-long-description-readme.md')).toString()
      )
    })
  })

  describe('security', () => {
    test('generates README with security section', async () => {
      await runContext
        .withAnswers({
          security: true
        })
        .run()

      assert.strictEqual(
        readFileSync(join(customTempDir, 'README.md')).toString(),
        readFileSync(join(exampleDir, 'security-readme.md')).toString()
      )
    })
  })

  describe('background', () => {
    test('generates README with background section', async () => {
      await runContext
        .withAnswers({
          background: true
        })
        .run()

      assert.strictEqual(
        readFileSync(join(customTempDir, 'README.md')).toString(),
        readFileSync(join(exampleDir, 'background-readme.md')).toString()
      )
    })
  })

  describe('API', () => {
    test('generates README with API section', async () => {
      await runContext
        .withAnswers({
          API: true
        })
        .run()

      assert.strictEqual(
        readFileSync(join(customTempDir, 'README.md')).toString(),
        readFileSync(join(exampleDir, 'api-readme.md')).toString()
      )
    })
  })

  describe('hostedDomain', () => {
    test('generates README with specified hosted domain', async () => {
      await runContext
        .withAnswers({
          hostedDomain: 'gitlab.com'
        })
        .run()

      assert.strictEqual(
        readFileSync(join(customTempDir, 'README.md')).toString(),
        readFileSync(join(exampleDir, 'default-readme.md'))
          .toString()
          .replace(
            '[@RichardLitt](https://github.com/RichardLitt)',
            '[@RichardLitt](https://gitlab.com/RichardLitt)'
          )
      )
    })
  })

  describe('mainMaintainer', () => {
    test('generates README when answer is omitted', async () => {
      await runContext
        .withAnswers({
          mainMaintainer: undefined
        })
        .run()

      const expectedMaintainer = await defaultAnswers.mainMaintainer()
      assert.strictEqual(
        readFileSync(join(customTempDir, 'README.md')).toString(),
        readFileSync(join(exampleDir, 'default-readme.md'))
          .toString()
          .replace(
            `[@${testDefaultAnswers.mainMaintainer}](https://github.com/${testDefaultAnswers.mainMaintainer})`,
            `[@${expectedMaintainer}](https://github.com/${expectedMaintainer})`
          )
      )
    })
  })

  describe('contributingFile', () => {
    test('generates README with contributing file', async () => {
      await runContext
        .withAnswers({
          contributingFile: true
        })
        .run()

      assert.strictEqual(
        readFileSync(join(customTempDir, 'README.md')).toString(),
        readFileSync(join(exampleDir, 'contributing-file-readme.md')).toString()
      )
    })
  })

  describe('prs', () => {
    test('generates README when prs is omitted', async () => {
      await runContext
        .withAnswers({
          prs: false
        })
        .run()

      assert.strictEqual(
        readFileSync(join(customTempDir, 'README.md')).toString(),
        readFileSync(join(exampleDir, 'prs-readme.md')).toString()
      )
    })
  })

  describe('mit/license/licensee', () => {
    test('fails to generate README when `mit` is false and no other license is specified', async () => {
      const promise = runContext
        .withAnswers({
          mit: false,
          license: undefined
        })
        .run()

      await assert.rejects(promise, {
        message: 'yeoman-test: question license was asked but answer was not provided'
      })
    })

    test('generates README with license different from MIT', async () => {
      await runContext
        .withAnswers({
          mit: false,
          license: 'CC BY-SA 4.0'
        })
        .run()

      assert.strictEqual(
        readFileSync(join(customTempDir, 'README.md')).toString(),
        readFileSync(join(exampleDir, 'different-license-readme.md')).toString()
      )
    })

    test('generates README defaulting to MIT license, even when other license specified', async () => {
      await runContext
        .withAnswers({
          mit: true,
          license: 'CC BY-SA 4.0'
        })
        .run()

      assert.strictEqual(
        readFileSync(join(customTempDir, 'README.md')).toString(),
        readFileSync(join(exampleDir, 'default-readme.md')).toString()
      )
    })

    test('generates README with suggested licensee full name', async () => {
      await runContext
        .withAnswers({
          licensee: undefined
        })
        .run()

      assert.strictEqual(
        readFileSync(join(customTempDir, 'README.md')).toString(),
        readFileSync(join(exampleDir, 'default-readme.md'))
          .toString()
          .replace(
            'Richard McRichface',
            (await fullName()) ?? (await testDefaultAnswers.mainMaintainer)
          )
      )
    })
  })

  describe('year', () => {
    test('fails to generate README when present year not used and diff year not specified', async () => {
      const promise = runContext
        .withAnswers({
          year: false,
          diffYear: undefined
        })
        .run()

      await assert.rejects(promise, {
        message: 'yeoman-test: question diffYear was asked but answer was not provided'
      })
    })

    test('generates README with provided year', async () => {
      await runContext
        .withAnswers({
          year: false,
          diffYear: '2016'
        })
        .run()

      assert.strictEqual(
        readFileSync(join(customTempDir, 'README.md')).toString(),
        readFileSync(join(exampleDir, 'different-year.md')).toString()
      )
    })

    test('generates README without different year when present year is confirmed', async () => {
      await runContext
        .withAnswers({
          year: true,
          diffYear: '2016'
        })
        .run()

      assert.strictEqual(
        readFileSync(join(customTempDir, 'README.md')).toString(),
        readFileSync(join(exampleDir, 'default-readme.md')).toString()
          .replace('2018', new Date().getFullYear())
      )
    })
  })
})
