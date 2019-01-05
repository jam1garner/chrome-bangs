function check_for_bang(search) {
    chrome.runtime.sendMessage({
        srch: search
    }, function(response) {});
}
