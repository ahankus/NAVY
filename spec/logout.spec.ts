import {browser, element, by} from 'protractor';
import {login} from '../page/loginPage.po';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

fdescribe('NAVY app test', function() {
    

    it('Should login to the app then logout', async () => {

        let navsupLogin = new login();
        await browser.get('http://10.16.34.112:4200/login');
        await navsupLogin.email.sendKeys('andrzej');
        await navsupLogin.password.sendKeys('andrzej');
        await navsupLogin.loginButton.click();
        await navsupLogin.logoutButton.click();
        await expect(browser.getCurrentUrl()).toEqual('http://10.16.34.112:4200/login');

    })
});
