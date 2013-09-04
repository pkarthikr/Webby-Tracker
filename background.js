var site = null;



function getSitefromUrl(url){

 	return url.match(/:\/\/(www\.)?(.[^/:]+)/)[2];
}

chrome.browserAction.onClicked.addListener(function (tab) {
	
	chrome.tabs.create({url:"statistics.html"});

});

chrome.tabs.onSelectionChanged.addListener(function(tabId, selectionInfo) {
      //This event is fired when the Tab is changed  
});


chrome.tabs.onUpdated.addListener(function(tabId, changeinfo,tab) {
 
});

chrome.tabs.onCreated.addListener(function(tab) {
 
});

