import {browser, element, by} from 'protractor';
import {admin} from '../page/adminPage.po';

fdescribe('NAVY app test', function() {
    

    it('Should edit an existing user', async () => {

        let  edit = new admin();
        
        await edit.adminButton.click();
        await edit.userEditAdmin.click();
        await edit.expenseEditMng.click();
        await edit.userEditDash.click();
        await edit.defaultSite.click();

        await edit.firstName.clear().then(function (input){
        element.all(by.css("input[name='text1']")).first().sendKeys('ELO');

        });
        await edit.lastName.clear().then(function (input1){
        element.all(by.css("input[name='text1']")).get(1).sendKeys('MELO');
        //browser.sleep(3000);
    
        });
        /*await edit.loginName.clear().then(function (input2){
        element.all(by.css("input[name='text1']")).get(2).sendKeys('MLODZIEZOWY');
        browser.sleep(5000);
        });*/

        await edit.saveButton.click();
        browser.sleep(3000);
        var result = element.all(by.css("input[name='text1']")).first().getAttribute('value');
               
              

        await expect(result).toBe('ELO');
       

    


    })
        

});