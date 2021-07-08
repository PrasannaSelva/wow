describe('Google Search', function(){

    it('should search', function(){

      browser.ignoreSynchronization=true; 
        
      browser.get('https://google.com/');
      

      //browser.manage().window().maximize(); 
      browser.sleep(3000);
      browser.element(by.className('gLFyf gsfi')).sendKeys('website ads',protractor.Key.ENTER); 
      browser.sleep(3000);
      var dem=element(by.className('TbwUpd NJjxre'));
     dem.getAttribute('class').then(function(s){
      var ads =element.all(by.tagName('div'));
      ads.then(function(rse){
      for(var i=0;i<rse.length;i++){
     rse[i].getAttribute('class').then(function(r){
        console.log(r);
         if(r==s){
            dem.click();
              
           };
           
 
    });
     
    
      };
    });
 });  
});
 
});