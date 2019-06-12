import {browser, element, by} from 'protractor';
import {login} from '../page/loginPage.po';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

describe('NAVY app test', function() {
    

    it('Should open login page in the Chrome and log into the app', async () => {

        let navsupLogin = new login();
        await browser.get('http://10.16.34.112:4200/login');
        await navsupLogin.email.sendKeys('andrzej');
        await navsupLogin.password.sendKeys('andrzej');
        await navsupLogin.loginButton.click();
        await expect(browser.getCurrentUrl()).toEqual('http://10.16.34.112:4200/dashboard');

    })
});
