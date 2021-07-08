describe('Google Search', function(){

    it('should search', function(){

      browser.ignoreSynchronization=true; 
        
      browser.get('https://google.com/');
      

      browser.manage().window().maximize(); 
      browser.sleep(3000);
      browser.element(by.className('gLFyf gsfi')).sendKeys('flowers',protractor.Key.ENTER); 
      browser.sleep(3000);
      var a = element(by.className('LC20lb DKV0Md'));
      var ads= element.all(by.className('Krnil'));
      ads.isPresent().then(function(ads1){
      if(ads1){
        console.log('1');
      ads.then(function(s){
     
        for(var i=0;i<s.length;i++)
        {
          
          browser.actions().mouseMove(s[i].getAttribute('href')).perform()
          browser.sleep(2000);
        
        }
        a.getText().click();
        browser.sleep(10000);
         console.log('3');
         });
      

    }
    else{
      a.click();
      browser.sleep(10000); 
    }
  })








  //     var dem=element(by.className('TbwUpd NJjxre'));
  //     dem.getAttribute('class').then(function(s){
  //      var ads =element.all(by.tagName('div'));
  //      ads.then(function(rse){
  //      for(var i=0;i<rse.length;i++){
  //     rse[i].getAttribute('class').then(function(r){
  //        console.log(r);
  //         if(r==s){
  //            dem.getText().click();
             
             
  //           };  
  //    });
  //    browser.sleep(10000);
  //    break
      
     
  //      };
  //    });
  // });  
});
});