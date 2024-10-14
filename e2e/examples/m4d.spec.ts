import { test, expect, Browser } from '@playwright/test';
import { LoginPage } from '../../page/loginPage';
import { rigthMenu } from '../../page/tessa';
import { powerOfAtterney } from '../../page/powerOfatterney';

test.use({
  locale: 'ru',
  timezoneId: 'Europe/Moscow',
  });

test('b2b', async ({ page }) => 
{
  await page.setViewportSize({ width: 1700, height: 800});
  var Login = new LoginPage(page);
  var rMenu = new rigthMenu(page);
  var poa = new powerOfAtterney(page);

  await page.goto('https://tessa.somecompany.ru/test/web/login');
  await Login.login('main\\panovane');
  await poa.createM4d();

  await page.pause;
  await Login.login('main\\panovane');
});

