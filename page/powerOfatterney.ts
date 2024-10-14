import { test, expect, type Locator, type Page } from '@playwright/test';
import { Input, Select, SelectView, DateField } from './baseElement';
import { rigthMenu } from '../page/tessa';

export class powerOfAtterney {
  readonly page: Page;
  readonly rMenu: rigthMenu;

  readonly sustemAttribute: Locator;
  readonly id: Locator;
  readonly number: Locator;
  readonly dateCreation: Locator;
  readonly status: Locator;
  readonly company: Locator;
  readonly authorDept: Locator;
  readonly Author: Locator;

  readonly plaseStorage: Select;
    readonly inBussines: Locator;
    readonly onHand: Locator;
    readonly byPlase: Locator;
  readonly principal: SelectView;
  readonly dateWitch: DateField;
  readonly CountExemplyars: Locator;
  readonly formTrust: Select;
    readonly simpleWright: Locator;
  readonly tst1: Locator;
  readonly confidant: SelectView;
  readonly baseAreaFile: Locator;
  readonly fileButton: Locator;
  readonly screateOnCDtatus: Locator;
  readonly userIcon: Locator;
  readonly LogoutButton: Locator;
  readonly spiner: Locator;
  readonly createOnCD: Locator;

  constructor(page: Page) {
    this.page = page;
    this.rMenu = new rigthMenu(page);
    //блок раздел системные свойства
    this.sustemAttribute = page.getByText('Системные свойства'); //Сам блок системные свойства
    //todo поменять локаторына верные
      //  кажется эти заполняемый поля необходмио переписать в паттерне pageElement
    this.id = page.getByText('ID');
    this.number = page.getByText('Номер');
    this.dateCreation = page.getByText('Дата создания');
    this.status = page.getByText('Статус');
    this.company = page.getByText('Предприятие группы');
    this.authorDept = page.getByText('Подразделение автора');
    this.Author = page.getByText('Автор');

    //блок Основная информация
    this.plaseStorage = new Select (page, 'Местонахождение оригинала доверенности') //page.locator(this.ByLabel('Местонахождение оригинала доверенности'));
      this.inBussines = this.plaseStorage.createValue('В деле');
      this.onHand = this.plaseStorage.createValue('Выдана на руки');
      this.byPlase = this.plaseStorage.createValue('По месту требования​');
    this.principal = new SelectView (page, 'Организация - доверитель');
    this.dateWitch = new DateField (page, 'Действует с');
    this.CountExemplyars = page.locator(this.ByLabel('Количество экземпляров'));
    this.formTrust = new Select(page, 'Форма доверенности');
      this.simpleWright = this.formTrust.createValue('Простая письменная')

    //Блок Доверенное лицо - зачем его сюда?
    this.confidant = new SelectView(page, 'Доверенное лицо')

    //Блок Полномочия доверенности
    
    //Блок Доп. согласующие
    this.tst1 = page.locator(this.ByLabel("Руководитель доверенного лица"));

    //блок Файлы
    this.baseAreaFile = page.getByText('1. Основные');
    this.fileButton = page.locator('.files-control-button > .fa');
    this.createOnCD = page.getByRole('button', { name: 'Создать в КД' });
    this.userIcon = page.locator('.icon-thin-193');
    this.LogoutButton = page.getByText('Выйти из учетной записи');
    this.spiner = page.locator('.fa-spinner');    //*/

  };

  ByLabel(labelText: string, typeElement = 'input') :string { 
    return 'xpath=//label[text()="' + labelText + '"]/following-sibling::div[1]//' + typeElement;
  };

  async logout(){
    await this.rMenu.logout();    
  };

  async PageIsload() {
    await expect(this.spiner).toBeHidden();
    await this.sustemAttribute.click();
  };
  async plaseLocationPowerOfAtterney() {
    // может заполнить место нахождение доверенности
    await this.plaseStorage.click();
    await expect(this.byPlase).toBeVisible();
    await expect(this.byPlase).toBeDisabled();
  };
  async baseFileIsLoaded() {
    await this.baseAreaFile.click();
  };

  async CanUploadFile() {
    await this.fileButton.click();
    //const page1Promise = page.waitForEvent('popup');
    //await page.getByRole('button', { name: 'Создать в КД' }).click();
    await expect(this.createOnCD).toBeVisible()
    await expect(this.createOnCD).toBeEditable();
  };
/*
  async canCrateOznakomlenie() {
    await this.locator('.tab-panel-side-button.button-left').click();
    await this.getByText('Действия').click();
    await this.getByText('Создать задачу на исполнение').hover();
    // await this.getByText('Отмена').click();
    await this.getByText('Создать задачу на ознакомление').hover();
  };   //*/

  async fillRukDv(text: string) {
    console.log(`text`, text);
    await this.tst1.fill(text);
    await this.page.getByRole('cell').filter({ hasText: text }).click()
  };

  async openNewCardPowerOfAtterney () {
    await this.rMenu.createCardPowerOrAtterney();
  };

  async addPrincipal(name: string){
    await this.principal.addByFilter(name);
  };

  async addConfidant(name: string){
    await this.confidant.addByFilter(name);
  };

  async selectToday(){
    await this.dateWitch.selectToday();
  };

  async createM4d () {
      await this.rMenu.createCardPowerOrAtterney();
      await this.addPrincipal('Тестовая организация N2534201');
      await this.dateWitch.selectToday();
      await this.CountExemplyars.fill('1');
      await this.formTrust.selectValue(this.simpleWright);
      await this.addConfidant('Тестовая организация N9509509');
  }
};