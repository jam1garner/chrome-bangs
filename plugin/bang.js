chrome.runtime.onMessage.addListener(function(request, sender) {


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     var response = xhttp.response;
	    var search = request.srch;
	    var bang = search.split(" ")[0];
         
         // var regex= (?:\()?(?:\+bang+)(?:\))?(?:\<br\>)?(?:);
	 var regex = " (?:\\()?(?:\\"+bang+")(?:\\))?(?:\\<br\\>)?(?:) "
	    var rex = new RegExp(regex, "g");
	    console.log(rex);
	    response = response.replace(/(\r\n|\n|\r)/gm, " ");
	    console.log(response);
	    if(bang[0] == "!"){
		 console.log(response.match(rex));
	    if(response.match(rex) != null){
	   
	   
	    
    chrome.tabs.update({url: "https://www.duckduckgo.com/?q=" +search}); 
	   }
	    }
    }};
xhttp.open("GET", "https://duckduckgo.com/bang_lite.html", true);
xhttp.send();

////chrome.tabs.update({url: request.redirect});
    });
