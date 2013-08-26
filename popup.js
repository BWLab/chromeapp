$(document).ready(function(){

    var storage = $.localStorage;

    if(storage.isSet('color')){

      var color = storage.get('color') 
      $('body').css('background', color);
    }
    
  });