import {ElementFinder, element, by, ElementArrayFinder} from "protractor";
import { toASCII } from "punycode";

export class login {
    email: ElementFinder;
    password: ElementFinder
    loginButton: ElementFinder
    logoutButton: ElementFinder

    constructor() {
        this.email = element(by.id('inputEmail'));
        this.password = element(by.id('inputPassword'));
        this.loginButton = element(by.buttonText('Login'));
        this.logoutButton = element(by.css("nav[class='navbar-nav ml-auto']"));

    }
}

