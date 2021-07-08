describe('Google Search', function(){

    it('should search', function(){

      browser.ignoreSynchronization=true; 
        
      browser.get('https://google.com/'); 
      browser.manage().window().maximize(); 
      browser.sleep(3000);
      browser.element(by.className('gLFyf gsfi')).sendKeys('besant technologies',protractor.Key.ENTER); 
      
      browser.sleep(3000);
    if(elem=browser.element(by.className('cfxYMc JfZTW c4Djg MUxGbd v0nnCb')))
    {
    elem.ignore;
  
       }
    if(rse=browser.element(by.className('LC20lb DKV0Md')))
      {  
        browser.sleep(9000);
        rse.click();
        
      
} 

    browser.sleep(9000); 

    });
});