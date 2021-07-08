describe('Google Search', function(){

    it('should search', function(){

      browser.ignoreSynchronization=true; 
        
      browser.get('https://google.com/'); 

      browser.manage().window().maximize(); 
      browser.sleep(9000);
      browser.element(by.className('gLFyf gsfi')).sendKeys('website ads',protractor.Key.ENTER); 
      browser.sleep(9000);
      browser.element.all(by.className('LC20lb DKV0Md')).click(); 
      
      browser.sleep(9000); 
    });
});
