import { test, expect } from '@playwright/test';

test.skip(process.env.CI === 'true', 'Skip visual tests in CI');

test('todo page visual snapshot', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  await expect(page).toHaveScreenshot('todo-page.png', {
    animations: 'disabled',
  });
});
