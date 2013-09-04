var startdate;
var site;
var diffdate;

function resetCounter(){
	timeinsecs = null;
	site = null;
	console.log("The times is "+timeinsecs);
}

function setSite(url){

	site = url;
	date = new Date();

	console.log("This Moment is"+date);

}

function setCheck(){
	diffdate = new Date();
	diff = diffdate.getTime() - date.getTime();
	seconds = diff * 0.001;

	lib.insert("sites",{site:site, timeinsecs: seconds});
	lib.commit();
}

function getSitefromUrl(url){
	return url.match(/:\/\/(www\.)?(.[^/:]+)/)[2];
}

chrome.browserAction.onClicked.addListener(function (tab) {
	
	//chrome.tabs.create({url:"statistics.html"});
	//updateCounter();
	// setCheck();

});

chrome.tabs.onSelectionChanged.addListener(function(tabId, selectionInfo) {
      //This event is fired when the Tab is changed  
      console.log("Selection Change fired");
      setCheck();
});


chrome.tabs.onUpdated.addListener(function(tabId, changeinfo,tab) {
 	
});

chrome.tabs.onCreated.addListener(function(tab) {
	console.log("Creation fired");
	setSite(tab.url);
 
});

