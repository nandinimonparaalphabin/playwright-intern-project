// add single todo
import { test, expect } from '@playwright/test';
import { TodoPage } from '../../pages/todoPage';

let todoPage: TodoPage;

test.beforeEach(async ({ page }) => {
  //await page.goto('https://demo.playwright.dev/todomvc');
  todoPage=new TodoPage(page);
  await todoPage.open();
});

test('user can add a todo item', async ({ page }) => {
  //const todoInput = page.locator('.new-todo');
  //await todoInput.fill('Learn Playwright');
  //await todoInput.press('Enter');
  await todoPage.addTodo('Learn Playwright');


  //const todoItem = page.locator('.todo-list li');
  //await expect(todoItem).toHaveText('Learn Playwright');
  const count = await todoPage.getTodoCount();
  expect(count).toBe(1);

 
  //check visibility
  //await expect(todoItem).toBeVisible();
  //check count
  //await expect(page.locator('.todo-list li')).toHaveCount(1);
  //check URL
  //await expect(page).toHaveURL(/todomvc/);

});
