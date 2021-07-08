describe('Google Search', function(){
    it('should search', function(){
    browser.ignoreSynchronization=true; 
    browser.get('https://google.com/'); 
    browser.manage().window().maximize(); 
    browser.element(by.className('gLFyf gsfi')).sendKeys('besant technologies',protractor.Key.ENTER);
    browser.sleep(3000);
     var elem=element(by.className('LC20lb DKV0Md'));
     var dce=element.all(by.tagName('a'));
    dce.then(function(rse){
     for(var i=0;i<rse.length;i++){
     
 
        expect(dce.get(i).getText()).toEqual(elem).then(function(rse){
          rse.click();
          console.log('1');
        });
        //done();
         
    
             ;
      
  
    break;
}

    });
    
    browser.sleep(3000);
    });
});
      