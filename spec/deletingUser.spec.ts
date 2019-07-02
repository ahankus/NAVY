import {browser, element, by} from 'protractor';
import {admin} from '../page/adminPage.po';

import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { notDeepEqual } from 'assert';

describe('NAVY app test', function() {
    

    it('Should delete a user from Administration', async () => {

        let  deleting = new admin();
        
        await deleting.adminButton.click(); 
        var red = element.all(by.css("input[name='text1']")).count();
        
        
        await deleting.deleteButton.click();
        var red1 = element.all(by.css("input[name='text1']")).count();
        
        
        await expect(red).not.toBe(red1);

    })
        


});