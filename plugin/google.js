window.onload = function() {
    console.log("google.js loaded");
    var form = document.getElementById("tsf");
    form.onsubmit = function() {
        console.log("search");
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
