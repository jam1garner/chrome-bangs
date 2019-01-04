chrome.webRequest.onBeforeRequest.addListener(
    function(info) {
        console.log("Url intercepted: " + info.url);
        var regex = /https:\/\/www\.google\.com\/search\?q=([^&]*).*/;
        var search = regex.exec(info.url)[1];
        console.log(search)
        if (search[0] == "!") {
            console.log("Is probably a bang");
            bang({
                srch: search.replace("%20", " ")
            });
        }
    },
    // filters
    {
        urls: [
            "https://www.google.com/search?*"
        ]
    },
    // extraInfoSpec
    ["blocking"]);
