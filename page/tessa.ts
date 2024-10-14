import { test, expect, type Locator, type Page } from '@playwright/test';

export class rigthMenu {
    readonly page: Page;
    readonly rigthMenu: Locator;
    readonly userIcon: Locator;
    readonly LogoutButton: Locator;
    readonly crateCard: Locator;
    readonly PowerOfAtterneyGroup: Locator;
    readonly newPowerOfAtterney: Locator;

    constructor(page: Page) {
        this.rigthMenu = page.locator('.tab-panel-side-button.button-right'); //Правое меню
        this.userIcon = page.locator('.icon-thin-193'); // Иконка пользователя
        this.LogoutButton = page.getByText('Выйти из учетной записи'); // Кнопка выход
        this.crateCard = page.getByRole('listitem').filter({ hasText: 'Создать карточку' }); //новая карточка
        this.PowerOfAtterneyGroup = page.getByRole('listitem').filter({ hasText: 'Доверенности' }); //новая доверенность
        this.newPowerOfAtterney = page.getByRole('listitem').filter({ hasText: 'Доверенность' }); //новая доверенность   
    };

    async logout(){
        await this.rigthMenu.click();
        await this.userIcon.click();
        await this.LogoutButton.click();       
    };

    async newCard(){
        await this.rigthMenu.click();
        await this.crateCard.click();
    };

    async createCardPowerOrAtterney(){
        await this.newCard();
        await this.PowerOfAtterneyGroup.click();
        await this.newPowerOfAtterney.click();
    };
};