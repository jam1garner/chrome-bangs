chrome.runtime.onMessage.addListener(function(request, sender) {
    bang(request);
});

function bang(request) {
    if (request.srch != null && request.srch != "") {

        var xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = xhttp.response;
                var search = request.srch;
                var bang = search.split(" ")[0];

                // var regex= (?:\()?(?:\+bang+)(?:\))?(?:\<br\>)?(?:);
                var regex = " (?:\\()?(?:\\" + bang + ")(?:\\))?(?:\\<br\\>)?(?:) "
                var rex = new RegExp(regex, "g");
                response = response.replace(/(\r\n|\n|\r)/gm, " ");
                if (bang[0] == "!") {
                    if (response.match(rex) != null) {



                        chrome.tabs.update({
                            url: "https://www.duckduckgo.com/?q=" + search
                        });
                    }
                }
            }
        };
        xhttp.open("GET", "https://duckduckgo.com/bang_lite.html", true);
        xhttp.send();
    }
}
