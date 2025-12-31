import { test, expect } from '@playwright/test';
import { TodoPage } from '../../pages/todoPage';

let todoPage: TodoPage;

test.beforeEach(async ({ page }) => {
  todoPage = new TodoPage(page);
  await todoPage.open();
});

test('user can filter active and completed todos', async () => {
  await todoPage.addTodo('Task 1');
  await todoPage.addTodo('Task 2');

  await todoPage.markTodoCompleted(0);

   // Active filter
  await todoPage.filterActive();
  await expect(todoPage.getTodoLabel(0)).toHaveText('Task 2');

  // Completed filter
  await todoPage.filterCompleted();
  await expect(todoPage.getTodoLabel(0)).toHaveText('Task 1');
  //await todoPage.filterActive();
 // expect(await todoPage.getActiveTodoCount()).toBe(1);

 // await todoPage.filterCompleted();
  //expect(await todoPage.getCompletedTodoCount()).toBe(1);
});
