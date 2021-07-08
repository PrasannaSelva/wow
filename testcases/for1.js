describe('Google Search', function(){

    it('should search', function(){

      browser.ignoreSynchronization=true; 
        
      browser.get('https://google.com/'); 
      browser.manage().window().maximize(); 
      browser.sleep(3000);
      browser.element(by.className('gLFyf gsfi')).sendKeys('webside ads',protractor.Key.ENTER); 
      
      browser.sleep(3000);
      var elem=element.all(by.className('LC20lb DKV0Md')); 
      //elem.then(function(rse){
      for(var i=0;i< elem.length;i++){
        elem.get(i).getText().then(function(text){
          if(text){
            browser.sleep(3000);
            text.click()
        //element(by.className('LC20lb DKV0Md')).click();
            } 
          
        })

        break;
    }
       // })
 browser.sleep(9000); 
    });
});
