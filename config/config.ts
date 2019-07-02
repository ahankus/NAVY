import {Config, browser, element, by} from 'protractor';
export let config: Config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
  
    suites:{
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
    
    onPrepare: () => 
    {
      browser.get('http://10.16.34.112:4200/login');
      browser.driver.manage().window().maximize();
      element(by.id('inputEmail')).sendKeys('andrzej');
      element(by.id('inputPassword')).sendKeys('andrzej');
      element(by.buttonText('Login')).click();

    },
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
      
    },



    
        
    
  };
  