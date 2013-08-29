$(document).ready(function() {

    var storage = $.localStorage;

    if (storage.isSet('color')) {

        var color = storage.get('color')
        $('body').css('background', color);
    }

    $('#capture').on('click', function() {
      chrome.extension
             .getBackgroundPage()
             .capture();
    });
});
