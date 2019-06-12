import {Config} from 'protractor';
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
  
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
      
    },



    
        
    
  };
  