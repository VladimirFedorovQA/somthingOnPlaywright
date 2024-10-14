//тут просто конспект по изучению PW

//1 Запуск тестов в консоли:
npx playwright test [landing login] --headed --workers 1 --debug --project 'CHROMIUM'

npx - NodeJS 
playwright - библиотека
test - комманда 
[landing login] - ТЕСТЫ с именем *landing* или *login*
--headed - показать браузер 
--workers 1 - потоков
--debug - отладка (пошаговый обход)
--project 'CHROMIUM'
--project=chromium - только в браузере

//Запустите набор тестовых файлов
npx playwright test tests/todo-page/ tests/landing-page/

//Запустить тест по названиию
npx playwright test -g "add a todo item"    

//генерировать тесты с помощью Codegen
npx playwright codegen demo.playwright.dev/todomvc

Аннотации тестов: https://playwright.dev/docs/test-annotations
test.skip() помечает тест как неактуальный. такой тест не выполняется .
 Используйте эту аннотацию, если тест неприменим в какой-либо конфигурации.
test.fail() помечает тест как негативный. запустит этот тест и 
гарантирует, что он действительно завершится неудачей. 
Если тест не провалится, тест драматурга подаст жалобу.
test.fixme() помечает тест как нерабочий. не будет запускать этот тест, 
в отличие от fail аннотации. Используется fixme при медленном запуске теста или сбоях.
test.slow() помечает тест как медленный и утрояет время ожидания теста.

test.only('focus this test', async ({ page }) => {
    // Запускайте только целенаправленные тесты во всем проекте
  });

  test.skip('skip this test', async ({ page }) => {
    // Этот тест не запускается
  });
  test('skip this test', async ({ page, browserName }) => {
    test.skip(browserName === 'firefox', 'Still working on it'); 
    // пропустить определенный тест в зависимости от условия.
  });

  //Фикстуры можно использовать для описания тестовых значений тесткейса. (какие-то негативные значения например)

  //локатор по близости от другого
  locator('.autocomplete-input > ul:near(:text("Местонахождение оригинала доверенности"))')

  const value = await page.getByRole('textbox').inputValue(); //Получение значения из инпута
  const checked = await page.getByRole('checkbox').isChecked(); //проставлен ли чекбокс

  await locator.getAttribute(name); //Возвращает значение атрибута соответствующего элемента

  page.locator('xpath=//button')
  $x("//label[text()='Местонахождение оригинала доверенности']/following-sibling::div[1]//input")