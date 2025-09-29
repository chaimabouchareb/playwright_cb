import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://chaimabouchareb.github.io/Testing-Pages/login_page.html');
  await expect(page).toHaveTitle('Login');
});