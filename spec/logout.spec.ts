import {browser, element, by} from 'protractor';
import {login} from '../page/loginPage.po';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

describe('NAVY app test', function() {
    

    it('Should login to the app then logout', async () => {

        let navsupLogin = new login();
        
        const displayed = navsupLogin.logoutButton.isDisplayed();
        
        await navsupLogin.logoutButton.click();
        await expect(browser.getCurrentUrl()).toEqual('http://10.16.34.112:4200/login');

    })
});
