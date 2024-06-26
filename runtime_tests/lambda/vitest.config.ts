/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import config from '../../vitest.config'

export default defineConfig({
  test: {
    env: {
      NAME: 'Node',
    },
    globals: true,
    include: ['**/runtime_tests/lambda/**/*.+(ts|tsx|js)'],
    exclude: [
      '**/runtime_tests/lambda/vitest.config.ts',
      '**/runtime_tests/lambda/mock.ts',
      '**/runtime_tests/lambda/stream-mock.ts',
    ],
    coverage: {
      ...config.test?.coverage,
      reportsDirectory: './coverage/raw/runtime-lambda',
    },
  },
})
