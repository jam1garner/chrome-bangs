window.onload = function() {
    if (window.location.href.indexOf("/search?q=") != -1){
        console.log("is search");
        var search = window.location.href.substring(
            window.location.href.indexOf("/search?q=") + "/search?q=".length
        ).split('&')[0];
        console.log(decodeURIComponent(search).replace("+", " "));
        check_for_bang(decodeURIComponent(search).replace("+", " "));
    }
    var form = document.getElementById("tsf");
    form.onsubmit = function() {
        //console.log("search");
        check_for_bang(getsearch());
    }
    var button = document.getElementsByClassName("Tg7LZd")[0];
    if (button != null) {
        button.setAttribute("type", "button"),
            button.addEventListener("click", function() {

                check_for_bang(getsearch());
            });
    }
    check_for_bang();

}

function getsearch() {
    return document.getElementsByName("q")[0].value;

}
