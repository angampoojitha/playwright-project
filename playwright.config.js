import { defineConfig, devices } from '@playwright/test';
 
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
 
  timeout: 120 * 1000,
 
  use: {
    viewport: { width: 1250, height: 1080 },
    trace: 'on-first-retry',
    ignoreHTTPSErrors: true,
 
    actionTimeout: 50_000,
    navigationTimeout: 50_000,
  },
 
  expect: {
    timeout: 20_000,
  },
 
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
]})
 
 