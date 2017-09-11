var EC=protractor.ExpectedConditions;

describe('Banking Login!', function() {
    
    it('should be able to login', function() {
   
       browser.driver  
       browser.driver.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
       var customerLoginButton=element(by.xpath(".//*[contains(text(),'Customer Login')]"))
        browser.wait(EC.visibilityOf(customerLoginButton).call(),8000,'Button not visible');
        customerLoginButton.click();
     });
   });