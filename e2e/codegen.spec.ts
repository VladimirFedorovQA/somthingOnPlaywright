// @ts-check
import { test, expect } from '@playwright/test';
test.use({ 
  locale: 'ru',
  timezoneId: 'Europe/Moscow',
});

test('codegen', async ({ page }) => {
  await page.goto('https://tessa.somecompany.ru/test/web/login?back_url=view%2F99a74f1c-6817-49ad-9694-02d5e4464e10');
  await page.getByPlaceholder('логин').click();
  await page.getByPlaceholder('логин').fill('autor');
  await page.getByPlaceholder('пароль').fill('123456');
  await page.getByRole('button', { name: ' Вход' }).click({
    position: {
      x: 35,
      y: 13
    }
  });
  await page.locator('div:nth-child(5) > .sc-gqjmRU').click();
  await page.getByText('Создать карточку').click();
  await page.getByRole('listitem').filter({ hasText: 'Доверенности' }).locator('span').click();
  await page.getByRole('listitem').filter({ hasText: 'Доверенность' }).locator('span').click();
});