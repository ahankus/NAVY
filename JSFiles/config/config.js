"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    suites: {
        login: '../spec/*',
    },
    /*specs: [
      '../spec/login1.spec.js',
      '../spec/auditView.spec.js',
      '../spec/dashboardView.spec.js',
      '../spec/spendsView.spec.js',
      '../spec/addingAudit.spec.js',
      '../spec/adminView.spec.js',
      '../spec/deletingUser.spec.js',
      '../spec/removingAudit.spec.js',
      '../spec/newUser.spec.js',
      '../spec/logout.spec.js',
      '../spec/editUser.spec.js',
      
    ],*/
    onPrepare: () => {
        protractor_1.browser.get('http://10.16.34.112:4200/login');
        protractor_1.browser.driver.manage().window().maximize();
        protractor_1.element(protractor_1.by.id('inputEmail')).sendKeys('andrzej');
        protractor_1.element(protractor_1.by.id('inputPassword')).sendKeys('andrzej');
        protractor_1.element(protractor_1.by.buttonText('Login')).click();
    },
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29uZmlnL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF3RDtBQUM3QyxRQUFBLE1BQU0sR0FBVztJQUN4Qiw0Q0FBNEM7SUFDNUMsZUFBZSxFQUFFLDhCQUE4QjtJQUMvQyxhQUFhLEVBQUUsSUFBSTtJQUVuQix1REFBdUQ7SUFDdkQsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7S0FDdEI7SUFFRCxNQUFNLEVBQUM7UUFDTCxLQUFLLEVBQUUsV0FBVztLQUduQjtJQUVEOzs7Ozs7Ozs7Ozs7O1FBYUk7SUFFSixTQUFTLEVBQUUsR0FBRyxFQUFFO1FBRWQsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUM5QyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakQsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRTFDLENBQUM7SUFDRCx3Q0FBd0M7SUFDeEMsZUFBZSxFQUFFO1FBQ2YsVUFBVSxFQUFFLElBQUk7S0FFakI7Q0FPRixDQUFDIn0=