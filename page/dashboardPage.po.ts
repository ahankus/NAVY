import {ElementFinder, element, by} from "protractor";

export class dashboard {
    loginButton: ElementFinder;
    logoutButton: ElementFinder;
    auditButton: ElementFinder;
    spendsButton: ElementFinder;
    dashButton: ElementFinder;
    adminButton: ElementFinder;
    email: ElementFinder;
    password: ElementFinder;

    constructor() {
        this.email = element(by.id('inputEmail'));
        this.password = element(by.id('inputPassword'));
        this.loginButton = element(by.buttonText('Login'));
        this.logoutButton = element(by.buttonText('Logout'));
        this.dashButton = element(by.id('menuItem#DASHBOARD'));
        this.auditButton = element(by.id('menuItem#AUDITS'));
        this.spendsButton = element(by.buttonText('Spends'));
        this.adminButton = element(by.buttonText('ADMINISTRATION'));
    }
}
