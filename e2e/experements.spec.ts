import { test, expect } from '@playwright/test';
test.use({
  locale: 'ru',
  timezoneId: 'Europe/Moscow',
  });
test('test', async ({ page }) => {
  await page.goto('https://tessa.somecompany.ru/test/web/login?back_url=card%2F492875a1-335d-4264-8265-88fd6126a5f5');
  await page.getByPlaceholder('логин').click();
  await page.getByPlaceholder('логин').fill('author');
  await page.getByPlaceholder('логин').press('Tab');
  await page.getByPlaceholder('пароль').fill('123456');
  await page.getByPlaceholder('пароль').press('Enter');
  await page.goto('https://tessa.somecompany.ru/test/web/card/492875a1-335d-4264-8265-88fd6126a5f5');

  await page.locator('#tab-panel-scroller-3ba354d4-b3f3-41a7-9bcd-72192f01140e').click();
  await page.locator('.tab-panel-tab-header').click();
  await page.locator('div:nth-child(5) > .sc-gqjmRU > .icon').click();
  await page.getByRole('listitem').filter({ hasText: 'Создать карточку' }).locator('i').nth(1).click();
  await page.getByText('Доверенности').click();
  await page.locator('li:nth-child(2) > .sc-dNLxif > .tile-row > div:nth-child(2)').click();
  await page.locator('div:nth-child(2) > .sc-eqIVtm > div > .autocomplete > .autocomplete-container > .autocomplete-input > ul').first().click();
  await page.locator('div:nth-child(2) > .sc-eqIVtm > div > .autocomplete > .autocomplete-container > .autocomplete-input > ul').first().click();
  await page.locator('.previewLoader').click();
  await page.locator('html').click();
  await page.locator('body').press('F12');
  await page.locator('#grid-container_lmjvcu3c5 td div').click();
});


