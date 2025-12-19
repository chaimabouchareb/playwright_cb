import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Runs before each test and signs in each page.
  await page.goto('https://cevasanteanimale-tstv11.outsystemsenterprise.com/PHP/Login');
  test.setTimeout(120_000);
  await page.getByRole('textbox', { name: 'Username' }).fill('chaimabouchareb17@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Bouchareb@28051997');
  await page.getByRole('button', { name: 'Login' }).click();
});

test('lab request creation', async ({ page }) => {
await page.getByRole('button', { name: ' Laboratory Data' }).click();
test.setTimeout(120_000);
await page.getByRole('link', { name: 'Laboratory Requests' }).click();
test.setTimeout(120_000);
await page.getByRole('link', { name: '' }).click();
test.setTimeout(120_000);
//account selection
await page.getByText('Select an Account').first().click();
const searchInput = page.getByRole('searchbox', { name: 'Select an Account' });
await searchInput.waitFor({ state: 'visible' });
test.setTimeout(120_000);
await searchInput.pressSequentially('Happy Farm', { delay: 100 });
const happyFarmOption = page.getByText('Happy Farm', { exact: true });
await happyFarmOption.waitFor({ state: 'visible' });
await happyFarmOption.click();

//date selection
await page.locator('input[type="date"]').click();




//await page.locator('input[type="datetime-local"]').press('ArrowLeft');
//await page.locator('input[type="datetime-local"]').press('ArrowRight');
await page.locator('input[type="datetime-local"]').fill('2025-11-10T17:15');

//test purpose selection
await page.getByText('Select a Test Purpose').first().click();
await page.getByText('Serological monitoring').click();

//animal species selection
//await page.locator('div').filter({ hasText: /^Select an Animal Species$/ }).first().click();
await page.getByText('Select an Animal Species').first().click();
await page.getByRole('searchbox', { name: 'Select an Animal Species' }).pressSequentially('Chicken', { delay: 100 });
//await page.locator('div').filter({ hasText: /^Chicken$/ }).click();
await page.getByText('Chicken').click();
//animal type selection
await page.getByText('Select an Animal Type').first().click();
await page.getByRole('searchbox', { name: 'Select an Animal Type' }).pressSequentially('Chicken', { delay: 100 });
//await page.getByText('Chicken').waitFor({ state: 'visible' });
await page.getByText('Chicken', { exact: true }).click();
//await page.locator('#b5-b9-b8-ChoicesList > .list > div:nth-child(2)').click();
//await page.getByRole('link', { name: '' }).click();

});

