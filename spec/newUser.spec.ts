import {browser, element, by} from 'protractor';
import {admin} from '../page/adminPage.po';

describe('NAVY app test', function() {
    

    it('Should create a new user in Administration', async () => {

        let  user = new admin();
        
        await user.adminButton.click();
        await user.newUserButton.click();
        await user.userAdmin.click();
        await user.auditMng.click();
        await user.expenseMng.click();
        await user.dashAccess.click();
        await user.activeBtn.click();  
        await user.defaultSite.click();
        await user.firstName.sendKeys('test');
        await user.lastName.sendKeys('test1');
        await user.loginName.sendKeys('test2');
        await user.psswd.sendKeys('testest');
        await user.addButton.click();
        var login = element(by.id('toast-container')).getText();
        
        await expect(login).toContain('User test2 has been created correctly.');

    })
        

});