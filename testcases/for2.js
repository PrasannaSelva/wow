describe('Google Search', function(){

    it('should search', function(){

      browser.ignoreSynchronization=true; 
        
      browser.get('https://google.com/'); 

      //browser.manage().window().maximize(); 
      browser.element(by.className('gLFyf gsfi')).sendKeys('website ads',protractor.Key.ENTER);
      browser.sleep(3000);
      var dem=element(by.className('g'));
    browser.sleep(3000);
    var dce=element.all(by.tagName('a'));
    dem.getAttribute('class').then(function(s){
    dce.then(function(rse){
    for(let i=0;i<rse.length;i++){
        console.log('1');
        s.getAttribute().then(function(elem){
        var s=rse[i];
            console.log(elem);
            // if(elem==dem){
            //     elem.click();
            // }

        })
    }

})     
    
})
    });
});