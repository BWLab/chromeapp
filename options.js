$(document).ready(function(){
    var storage = $.localStorage;

    if(storage.isSet('color')){

      $('#color').find('option').each(function(idx, el){
        if($(el).val() == storage.get('color')){
          el.selected = true;
        }
      }
    );
    }
    
    //$('#color').find('option')


    $('#save').on('click', function(){
      var _color = $('#color').find('option:selected').val();
      storage.set('color', _color);
      $('#status').html('opzione salvata');
    })
  });