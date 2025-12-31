import { test, expect } from '@playwright/test';
import { TodoPage } from '../../pages/todoPage';

let todoPage: TodoPage;

test.beforeEach(async ({ page }) => {
  todoPage = new TodoPage(page);
  await todoPage.open();
});

test('todos persist after page refresh', async ({ page }) => {
  await todoPage.addTodo('Persistent task');

  await page.reload();

  const count = await todoPage.getTodoCount();
  expect(count).toBe(1);

  const text = await todoPage.getTodoText(0);
  expect(text).toBe('Persistent task');
});
