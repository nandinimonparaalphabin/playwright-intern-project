import { test, expect } from '@playwright/test';
import { TodoPage } from '../../pages/todoPage';

let todoPage: TodoPage;

test.beforeEach(async ({ page }) => {
  todoPage = new TodoPage(page);
  await todoPage.open();
});

test('user can add multiple todos', async () => {
  await todoPage.addTodo('Task 1');
  await todoPage.addTodo('Task 2');
  await todoPage.addTodo('Task 3');

  const count = await todoPage.getTodoCount();
  expect(count).toBe(3);
});
