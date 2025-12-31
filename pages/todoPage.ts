import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class TodoPage extends BasePage {
  private newTodoInput: Locator;
  private todoItems: Locator;

  constructor(page: Page) {
    super(page);
    this.newTodoInput = page.locator('.new-todo');
    this.todoItems = page.locator('.todo-list li');
  }

  async open(): Promise<void> {
    await this.goto('https://demo.playwright.dev/todomvc');
  }

  async addTodo(text: string): Promise<void> {
    await this.newTodoInput.fill(text);
    await this.newTodoInput.press('Enter');
  }

  async getTodoCount(): Promise<number> {
    return await this.page.locator('.todo-list li').count();
  }

  async getTodoText(index: number): Promise<string> {
    const rawText = await this.todoItems.nth(index).innerText();
    return rawText.replace(/\s+/g, ' ').trim();
  }

  async markTodoCompleted(index: number): Promise<void> {
    const todo = this.page.locator('.todo-list li').nth(index);
    await todo.locator('.toggle').check();
    await expect(todo).toHaveClass(/completed/);
  }

  async deleteTodo(index: number): Promise<void> {
    const todo = this.todoItems.nth(index);
    await todo.hover();
    await todo.locator('.destroy').click();
  }

  async filterActive(): Promise<void> {
    await this.page.getByRole('link', { name: 'Active' }).click();
    await this.page.waitForURL(/#\/active/);
  }

  async filterCompleted(): Promise<void> {
    await this.page.getByRole('link', { name: 'Completed' }).click();
    await this.page.waitForURL(/#\/completed/);
  }

  async getActiveTodoCount(): Promise<number> {
    return await this.page.locator('.todo-list li:not(.completed)').count();
  }

  async getCompletedTodoCount(): Promise<number> {
    return await this.page.locator('.todo-list li.completed').count();
  }
  getTodoLabel(index: number) {
  return this.page.locator('.todo-list li label').nth(index);
 }

}
