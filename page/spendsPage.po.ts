import {ElementFinder, element, by} from "protractor";

export class spends {
    loginButton: ElementFinder;
    logoutButton: ElementFinder;
    auditButton: ElementFinder;
    spendsButton: ElementFinder;
    adminButton: ElementFinder;
    email: ElementFinder;
    password: ElementFinder;

    constructor() {
        this.email = element(by.id('inputEmail'));
        this.password = element(by.id('inputPassword'));
        this.loginButton = element(by.buttonText('Login'));
        this.logoutButton = element(by.buttonText('Logout'));
        this.auditButton = element(by.id('menuItem#AUDITS'));
        this.spendsButton = element(by.id('menuItem#SPENDS'));
        this.adminButton = element(by.id('menuItem#ADMINISTRATION'));
    }
}
