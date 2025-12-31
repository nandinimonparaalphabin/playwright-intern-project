import { test, expect } from '@playwright/test';

test('todo page visual snapshot', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  await expect(page).toHaveScreenshot('todo-page.png', {
    animations: 'disabled',
  });
});
