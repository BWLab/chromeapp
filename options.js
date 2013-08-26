$(document).ready(function() {
    var storage = $.localStorage;

    if (chrome.extension.getBackgroundPage().isOption('color')) {
        var _color = chrome.extension.getBackgroundPage().getOption('color');
        $('#color').find('option').each(function(idx, el) {
            if ($(el).val() == _color) {
                el.selected = true;
            }
        });
    }

    $('#save').on('click', function() {
        var _color = $('#color').find('option:selected').val();
       chrome.extension
             .getBackgroundPage()
            .saveOption(
              [{
                'value': _color,
                'key': 'color'
              }]);
        $('#status').html('opzione salvata');
    })
});

