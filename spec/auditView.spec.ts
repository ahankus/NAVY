import {browser, element, by} from 'protractor';
import {dashboard} from '../page/dashboardPage.po';

import { UseExistingWebDriver } from 'protractor/built/driverProviders';

describe('NAVY app test', function() {
    

    it('Should open Audit view in the Chrome', async () => {

        let homepage = new dashboard();
        
        await homepage.auditButton.click();
        await expect(browser.getCurrentUrl()).toEqual('http://10.16.34.112:4200/audit');

    })
});
