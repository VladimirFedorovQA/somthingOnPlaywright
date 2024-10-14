import { test, type Locator, type Page } from '@playwright/test';

export class Input {
  readonly page: Page; //виден только в наследниках
  readonly label: string; //виден везде. Доступен только для чтения
  readonly locator: Locator;

  constructor(page: Page, label: string) {
    this.page = page;
    this.label = label;
    this.locator = page.locator(this.ByLabel());
  };
  ByLabel(typeElement = 'input') {
    return 'xpath=//label[text()="' + this.label + '"]/following-sibling::div[1]//' + typeElement;
  };
  async click() {
    await this.locator.click();
  };
};

export class Select extends Input {
  readonly firstBtn: Locator;
  readonly first: Locator;
  constructor(page: Page, label: string) {
    super(page, label);
    this.firstBtn = page.locator(this.ByLabel('button[1]')); //page.getByRole('button', { name: '⬇' });
    this.first = page.locator('.autocomplete-dropdown').getByRole('cell').first();
  };
  async selectFirst() {
    await this.firstBtn.click();
    await this.first.click();
  };
  createValue(valueText: string): Locator{
    return this.page.locator('.autocomplete-dropdown').getByText(valueText);
  };

  async selectValue(val: Locator){
    await this.firstBtn.click();
    await val.click()
  }
};

export class SelectView extends Select {
  constructor(page: Page, label: string) {
    super(page, label);
  };

  async addByFilter(quickFilter: string) {
    await this.firstBtn.click();
    await this.page.locator('.dialog-content .view-quick-search').getByRole('textbox').fill(quickFilter);
    await this.page.locator('.dialog-content .view-quick-search').getByRole('textbox').press('Enter');
    await this.page.getByRole('cell', { name: quickFilter }).nth(1).dblclick();
  };
};

export class DateField extends Input {
  readonly calendar: Locator;

  constructor(page: Page, label: string) {
    super(page, label);
    this.calendar = page.locator(this.ByLabel('button[1]'),);
  }

  async selectToday() {
    await this.calendar.click();
    await this.page.locator('.calendar-day-today').click();
  };
};
