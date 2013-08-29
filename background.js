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
var id = 100;

function capture() {

    chrome.tabs.captureVisibleTab({'format': 'png'}, function(img) {

        var screenshotUrl = img;

        //recupera il file locale html e lo trasforma in url
        var viewTabUrl = chrome.extension.getURL('screenshot.html?id=' + id++);

        chrome.tabs.create({
                url: viewTabUrl
            },
            function(tab) {

                var targetId = tab.id;
                chrome.tabs.onUpdated.addListener(function(tabId, infoTab) {
                    
                    //controllo che l'id tab aperto sia lo stesso
                    if (tabId != targetId) return;

                    //controllo che lo stato di caricamento sia completato
                    if (infoTab.status != "complete") return;

                    //se il tab è creato posso eliminare l'evento
                    chrome.tabs.onUpdated.removeListener(this);

                    //controllo fra le view dell'estensione quella che è stata aperta
                    //e passo l'immagine
                    var views = chrome.extension.getViews();

                    for (var i = 0; i < views.length; i++) {

                        var view = views[i];

                        //se la view ha lo stesso indirizzo url creato allora passo l'immagine
                        if (view.location.href == viewTabUrl) {
                            view.setScreenshotUrl(screenshotUrl);
                            break;
                        }

                    }
                });
            }
        );
    });
}
