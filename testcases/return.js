describe('Google Search', function(){

    it('should search', function(){

      browser.ignoreSynchronization=true; 
        
      browser.get('https://google.com/'); 

      browser.manage().window().maximize(); 
      browser.sleep(3000);
      browser.element(by.className('gLFyf gsfi')).sendKeys('website ads',protractor.Key.ENTER);
    browser.sleep(3000); 
    var del=element.all(by.className('LC20lb DKV0Md'));
    var dce=element.all(by.tagName('a'));
    dce.filter(function(elem){
return elem.getText().then(function(text){
  return text==del;

  
}); //console.log('1');
    }); console.log('1');

 });
});