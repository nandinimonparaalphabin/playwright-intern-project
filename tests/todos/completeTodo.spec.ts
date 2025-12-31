//Mark as completed


import { test, expect } from '@playwright/test';
import { TodoPage } from '../../pages/todoPage';

let todoPage: TodoPage;

test.beforeEach(async ({ page }) => {
  todoPage = new TodoPage(page);
  await todoPage.open();
  await todoPage.addTodo('Complete me');
});

test('user can mark a todo as completed', async () => {
  await todoPage.markTodoCompleted(0);

  const completedText = await todoPage.getTodoText(0);
  expect(completedText).toBe('Complete me');
});
