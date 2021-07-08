describe('Google Search', function(){

    it('should search', function(){
  
      browser.ignoreSynchronization=true; 
        
      browser.get('https://google.com/');
      browser.manage().window().maximize(); 
      browser.sleep(3000);
      browser.element(by.className('gLFyf gsfi')).sendKeys('mango',protractor.Key.ENTER); 
      browser.sleep(3000);
      let link=element(by.className('TbwUpd NJjxre'));
      let add=element(by.className('cfxYMc JfZTW c4Djg MUxGbd v0nnCb'));
        add.isPresent().then(function(b){
        if(b){
      element.all(by.tagName('div')).getAttribute('class').then(function(c){
        link.getAttribute('class').then(function(a){
            for(let i=0;i<c.length;i++){
               if(c[i]==a){
                element(by.className(c[i])).getText().click();
                browser.sleep(3000);
                break;
             }
           }
         });  
        });
      }
    else{
      link.click();
    }
      });
    });
});