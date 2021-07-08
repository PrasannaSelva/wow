describe('Google Search', function(){

  it('should search', function(){

    browser.ignoreSynchronization=true; 
      
    browser.get('https://google.com/');
  //browser.manage().window().maximize(); 
    browser.sleep(3000);
    browser.element(by.className('gLFyf gsfi')).sendKeys('besant technologies',protractor.Key.ENTER); 
    browser.sleep(3000);
   var z=element(by.className('TbwUpd NJjxre'));
    var n=element(by.className('cfxYMc JfZTW c4Djg MUxGbd v0nnCb'));
    n.isPresent().then(function(m){
      if(m){
        console.log('1');
      z.getAttribute('class').then(function(a1){
       element.all(by.tagName('div')).getAttribute('class').then(function(d){
       // console.log(a1);
        for(i=0;i<d.length;i++){
         // console.log('1');
        if(d[i]==a1){
          //console.log(d[i]);
          element(by.className(d[i])).getText().click();
          
          //  var k=console.log(d[i]).getText();
           //console.log(k).
          //  var l=d[i];
          //  l.get().then(function(k){
        //  get(d[i]).then(function(k){
        //   console.log(k);
        //k.click();
       
      // })
    
      break;
      }
    }
  });
 
  });
}
else{
  console.log('2');
  z.click();
}

 });
  
});

});