import {browser, element, by} from 'protractor';
import {audit} from '../page/auditPage.po';

import { UseExistingWebDriver } from 'protractor/built/driverProviders';

describe('NAVY app test', function() {
    

    it('Should add a new audit', async () => {

        let managment = new audit();
        
        await managment.auditButton.click();             
        await managment.newAudit.click();
        await managment.grade.sendKeys('Z');
        await managment.site.click();
        await managment.add.click();
    

       var NumberOfAudits =  element(by.id('toast-container')).getText();

       await expect(NumberOfAudits).toContain('Audit has been added correctly');
       
    })
});
