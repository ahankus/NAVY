import {ElementFinder, element, by} from "protractor";

export class login {
    email: ElementFinder;
    password: ElementFinder
    loginButton: ElementFinder
    logoutButton: ElementFinder

    constructor() {
        this.email = element(by.id('inputEmail'));
        this.password = element(by.id('inputPassword'));
        this.loginButton = element(by.buttonText('Login'));
        this.logoutButton = element(by.buttonText('Logout'));

    }
}

