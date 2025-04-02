import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['**/*test.js'],
    onConsoleLog (log, type) {
      // Suppress expected stderr messages for test cases w/ missing answers.
      if (
        type === 'stderr' &&
        /yeoman-test: question \w+ was asked but answer was not provided/.test(
          log
        )
      ) {
        return false
      }

      return true
    }
  }
})
