import {browser} from 'protractor';
import {login} from '../page/loginPage.po';
import {dashboard} from '../page/dashboardPage.po';

describe('NAVY app test', function() {
    
    it('Should login to the app and navigate to Dashboard view', async () => {

        let navsupLogin = new login();
        await browser.get('http://10.16.34.112:4200/login');
        await navsupLogin.email.sendKeys('andrzej');
        await navsupLogin.password.sendKeys('andrzej');
        await navsupLogin.loginButton.click();
        await expect(browser.getCurrentUrl()).toEqual('http://10.16.34.112:4200/dashboard');

    });

})
