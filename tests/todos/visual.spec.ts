import { test, expect } from '@playwright/test';

test.describe('visual regression', () => {
  test.use({ browserName: 'chromium' });

  test('todo page visual snapshot', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    await expect(page).toHaveScreenshot('todo-page.png');
  });
});
