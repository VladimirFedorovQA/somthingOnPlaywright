import { test, expect, type Locator, type Page } from '@playwright/test';


/*
есть общие элементы для всего проекта
Есть какие-то базовые элементы из которых строится вся страница
*/

export class LoginPage {
    readonly page: Page;
    readonly username:Locator;
    readonly password:Locator ;
    readonly loginButton: Locator;

    constructor(page: Page, loginUri = 'https://tessa.somecompany.ru/test/web/login') 
    {
        this.page = page;
        this.username = page.getByPlaceholder('логин');
        this.password = page.getByPlaceholder('пароль');
        this.loginButton = page.getByRole('button', { name: 'Вход' });
    };
    
    async goToLoginPage(href='https://tessa.somecompany.ru/test/web/login#oldlogin'){
        this.page.goto(href);
    };

    async login(uname: string, pass=''){
        await this.username.fill(uname);
        await this.password.fill(pass);
        await this.loginButton.click();
        await this.page.waitForSelector('.fa.fa-spinner.fa-spin.fa-3x.fa-fw', { state: 'visible' });
    };
    
};