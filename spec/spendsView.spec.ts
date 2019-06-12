import {browser, element, by} from 'protractor';
import {spends} from '../page/spendsPage.po';

import { UseExistingWebDriver } from 'protractor/built/driverProviders';

describe('NAVY app test', function() {
    

    it('Should open Spends view in the Chrome', async () => {

        let  Spendview = new spends();
        await browser.get('http://10.16.34.112:4200/login');
        await Spendview.email.sendKeys('andrzej');
        await Spendview.password.sendKeys('andrzej');
        await Spendview.loginButton.click();
        browser.driver.manage().window().maximize();
        await Spendview.spendsButton.click();

        await expect(browser.getCurrentUrl()).toEqual('http://10.16.34.112:4200/spend');

    })
});
