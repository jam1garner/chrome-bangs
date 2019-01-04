window.onload = function(){
var form = document.getElementById("search-form")
form.onsubmit= function() {
var search = document.getElementById("query").value;
chrome.runtime.sendMessage({srch: search}, function(response){
});
}

var search = document.getElementById("query").value;
chrome.runtime.sendMessage({srch: search}, function(response){
});

}

