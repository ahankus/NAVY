import {browser} from 'protractor';
import {dashboard} from '../page/dashboardPage.po';

describe('NAVY app test', function() {
    
    it('Should login to the app and navigate to Dashboard view', async () => {

        let dashView = new dashboard();
       
        await dashView.dashButton.click();
        await expect(browser.getCurrentUrl()).toEqual('http://10.16.34.112:4200/dashboard');

    });

})
