import { test } from '@playwright/test';

/*test.beforeEach(async ({ page }) => {
  // Runs before each test and signs in each page.
  await page.goto('https://cevasanteanimale-tstv11.outsystemsenterprise.com/PHP/Login');
  await page.getByRole('textbox', { name: 'Username' }).fill('chaimabouchareb17@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Bouchareb@28051997');
  await page.getByRole('button', { name: 'Login' }).click();
});
*/
test('login', async ({ page }) => {
  // Runs before each test and signs in each page.
  await page.goto('https://cevasanteanimale-tstv11.outsystemsenterprise.com/PHP/Login');
  await page.getByRole('textbox', { name: 'Username' }).fill('chaimabouchareb17@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Bouchareb@28051997');
  await page.getByRole('button', { name: 'Login' }).click();
});

/*test('test1', async ({ page }) => {
  await page.goto('https://cevasanteanimale-tstv11.outsystemsenterprise.com/PHP/');
  await expect(page).toHaveTitle(/PHP/);

});
*/
test('lab request creation', async ({ page }) => {
await page.getByRole('button', { name: ' Laboratory Data' }).click();
await page.getByRole('link', { name: 'Laboratory Requests' }).click();
await page.getByRole('link', { name: '' }).click();
await page.locator('div').filter({ hasText: /^Select an Account$/ }).first().click();
await page.getByRole('searchbox', { name: 'Select an Account' }).fill('test');
await page.locator('div').filter({ hasText: /^#test#Marci$/ }).click();
await page.locator('input[type="datetime-local"]').click();
await page.locator('input[type="datetime-local"]').press('ArrowLeft');
await page.locator('input[type="datetime-local"]').press('ArrowLeft');
await page.locator('input[type="datetime-local"]').press('ArrowLeft');
await page.locator('input[type="datetime-local"]').press('ArrowRight');
await page.locator('input[type="datetime-local"]').press('ArrowRight');
await page.locator('input[type="datetime-local"]').fill('2025-10-30T03:15');
await page.getByText('Select a Test Purpose').first().click();
await page.getByText('Awareness/Survey').click();
await page.locator('div').filter({ hasText: /^Awareness\/Survey$/ }).first().click();
await page.getByText('Serological monitoring').click();
await page.locator('div').filter({ hasText: /^Select an Animal Species$/ }).first().click();
await page.locator('div').filter({ hasText: /^Chicken$/ }).click();
await page.getByText('Select an Animal Type').first().click();
await page.locator('#b5-b9-b8-ChoicesList > .list > div:nth-child(2)').click();
await page.getByRole('link', { name: '' }).click();
await page.goto('https://cevasanteanimale-tstv11.outsystemsenterprise.com/PHP/RequestDetail?IsEdit=true&RequestId=62029');
await page.getByRole('link', { name: '' }).click();
});