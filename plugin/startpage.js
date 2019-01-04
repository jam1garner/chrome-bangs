window.onload = function() {
    var form = document.getElementById("search-form")
    form.onsubmit = function() {
        check_for_bang(getsearch());
    }

    check_for_bang(getsearch());

}

function getsearch() {
    return document.getElementById("query").value;
}
