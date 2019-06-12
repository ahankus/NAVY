import {browser, element, by} from 'protractor';
import {admin} from '../page/adminPage.po';

import { UseExistingWebDriver } from 'protractor/built/driverProviders';

describe('NAVY app test', function() {
    

    it('Should open Administration view in the Chrome', async () => {

        let  Administration = new admin();
        await browser.get('http://10.16.34.112:4200/login');
        await Administration.email.sendKeys('andrzej');
        await Administration.password.sendKeys('andrzej');
        await Administration.loginButton.click();
        browser.driver.manage().window().maximize();
        await Administration.adminButton.click();

        await expect(browser.getCurrentUrl()).toEqual('http://10.16.34.112:4200/admin');

    })
});
