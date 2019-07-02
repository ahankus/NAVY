import {browser, element, by} from 'protractor';
import {login} from '../page/loginPage.po';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

describe('NAVY app test', function() {
    

    it('Should open login page in the Chrome and log into the app', async () => {

        let navsupLogin = new login();
        
        await expect(element(by.id('logoImage')).isDisplayed()).toBe(true);
        
    })
});
