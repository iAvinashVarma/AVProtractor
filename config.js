exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
     //Capabilities to be passed to the webdriver instance.
    capabilities: {
      'browserName': 'chrome'
    },
     onPrepare: function() {
      // Override the timeout for webdriver.
      browser.driver.manage().timeouts().implicitlyWait(60000);
    },
    specs: ['login.js']
  };