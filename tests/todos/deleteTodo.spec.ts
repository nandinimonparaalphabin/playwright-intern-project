import { test, expect } from '@playwright/test';
import { TodoPage } from '../../pages/todoPage';

let todoPage: TodoPage;

test.beforeEach(async ({ page }) => {
  todoPage = new TodoPage(page);
  await todoPage.open();
  await todoPage.addTodo('Delete me');
});

test('user can delete a todo', async () => {
  await todoPage.deleteTodo(0);

  const count = await todoPage.getTodoCount();
  expect(count).toBe(0);
});
