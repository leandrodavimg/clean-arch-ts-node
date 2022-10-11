import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    watch: true,
    threads: false,
    coverage: {
      provider: 'istanbul' // or 'c8'
    },
  }
})