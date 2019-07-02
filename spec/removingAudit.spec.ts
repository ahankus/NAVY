import {browser, element, by, protractor, ExpectedConditions} from 'protractor';
import {audit} from '../page/auditPage.po';

import { UseExistingWebDriver } from 'protractor/built/driverProviders';

describe('NAVY app test', function() {
    

    it('Should remove an audit', async () => {

        let removing = new audit();

        await removing.auditButton.click();        
        var grade = element.all(by.name('auditGrade')).count();
        
        await removing.deleteAudit.click();
        var newGrade = element.all(by.name('auditGrade')).count();
        await expect(grade).not.toBe(newGrade);
    
        
        
    })
});
