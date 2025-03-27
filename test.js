import fullName from 'fullname'
import assert from 'node:assert/strict'
import { existsSync, mkdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { beforeEach, describe, test } from 'vitest'
import helpers, { result } from 'yeoman-test'

describe('standard-readme:app', async () => {
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
      .withAnswers({
        description: 'test',
        maintainers: 'RichardLitt',
        licensee: 'Richard McRichface'
      })
  })

  test('generates default README file with current year', async () => {
    await runContext
      .run()

    assert.strictEqual(
      readFileSync(join(customTempDir, 'README.md')).toString(),
      readFileSync(join(exampleDir, 'default-readme.md')).toString()
        .replace('2018', new Date().getFullYear())
    )
  })

  test('generates README with different year', async () => {
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
        diffYear: 2016
      })
      .run()

    assert.strictEqual(
      readFileSync(join(customTempDir, 'README.md')).toString(),
      readFileSync(join(exampleDir, 'default-readme.md')).toString()
        .replace('2018', new Date().getFullYear())
    )
  })

  test('generates README with given license', async () => {
    await runContext
      .withAnswers({
        mit: false,
        license: 'CC-BY-SA 3.0'
      })
      .run()

    assert.strictEqual(
      readFileSync(join(customTempDir, 'README.md')).toString(),
      readFileSync(join(exampleDir, 'different-license-readme.md')).toString()
        .replace('2018', new Date().getFullYear())
    )
  })

  test('generates README defaulting to MIT license', async () => {
    await runContext
      .withAnswers({
        mit: true,
        license: 'CC-BY-SA 3.0'
      })
      .run()

    assert.strictEqual(
      readFileSync(join(customTempDir, 'README.md')).toString(),
      readFileSync(join(exampleDir, 'default-readme.md')).toString()
        .replace('2018', new Date().getFullYear())
    )
  })

  test('generates README with suggested full name', async () => {
    await result
      .create(join(__dirname, './app'))
      .withAnswers({
        description: 'test',
        maintainers: 'RichardLitt'
      })
      .run()

    assert.strictEqual(
      readFileSync(join(customTempDir, 'README.md')).toString(),
      readFileSync(join(exampleDir, 'default-readme.md')).toString()
        .replace('2018', new Date().getFullYear())
        .replace('Richard McRichface', await fullName() ?? '')
    )
  })

  test('generates maximal README', async () => {
    await runContext
      .withAnswers({
        API: true,
        background: true,
        badge: true,
        badges: true,
        banner: true,
        bannerPath: 'test',
        contributingFile: true,
        license: 'test',
        longDescription: true,
        mit: true,
        moduleName: 'example',
        prs: true,
        security: true,
        year: true
      })
      .run()

    assert.strictEqual(
      readFileSync(join(customTempDir, 'README.md')).toString(),
      readFileSync(join(exampleDir, 'maximal-readme.md')).toString()
        .replace('2018', new Date().getFullYear())
    )
  })
})
