import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://cevasanteanimale-tstv11.outsystemsenterprise.com/PHP/Login');
  await expect(page).toHaveTitle('Login');
});