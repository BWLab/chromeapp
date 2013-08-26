function saveOption(data) {
    
    var storage = $.localStorage;
    
    $(data).each(function(i, e) {
        storage.set(e.key, e.value);
    });
}

function getOption(option) {

    var storage = $.localStorage;
    
    if (isOption(option)) {
        return storage.get(option);
    }
}

function isOption(option) {

    var storage = $.localStorage;
    
    return storage.isSet(option);
}
