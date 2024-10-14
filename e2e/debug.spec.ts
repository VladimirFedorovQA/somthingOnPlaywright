import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../page/loginPage';
import { powerOfAtterney } from '../page/powerOfatterney'

test.use({
  locale: 'ru',
  timezoneId: 'Europe/Moscow',
  });
//test.describe.configure({ mode: 'serial' });

//test.beforeEach (async ({ page }, testInfo) => { };

async function tst(page: Page, uname: string, href: string) {
  await page.setViewportSize({ width: 1024, height: 1024 });
  await page.goto('https://tessa.somecompany.ru/test/web/login');
  var Login = new LoginPage(page);
  var doverka = new powerOfAtterney(page);
  await Login.login(uname,'admin');
  await page.goto(href);
  await doverka.plaseStorage.selectFirst();
  /*await doverka.PageIsload()
  await doverka.baseFileIsLoaded(); // блок основный отображается 
  await doverka.CanUploadFile(); //загрузить файл
  //await CanCrateOznakomlenie();*/
//  await doverka.fillRukDv("Сорокина Ю");
 // await Login.logout(); 
};

test.afterEach(async ({ page }, testInfo) => {
  console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);
  if (testInfo.status !== testInfo.expectedStatus)
  console.log(`Did not run as expected, ended up at ${page.url()}`);
});//*/

test('dbg', async ({ page }) => {
   // test.fail();
  await tst(page, 'admin', 'https://tessa.somecompany.ru/test/web/card/68d49222-9edc-48e2-8bee-7685ffa3f07a');
});