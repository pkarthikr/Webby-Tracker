var currentSite = null;
var currentTabId = null;
var startTime = null;
var siteRegexp = /^(\w+:\/\/[^\/]+).*$/;
var updateCounterInterval = 1000 * 60;  // 1 minute.
var lastActivitySeconds = 0;

chrome.tabs.onSelectionChanged.addListener(
     function(tabId, selectionInfo) {
        console.log("Value of Current Site is " +currentSite);
        resetActivity();
        currentTabId = tabId;
        updateCounter();
 });


 chrome.tabs.onUpdated.addListener(
      function(tabId, changeInfo, tab) {
        if (tabId == currentTabId) {
          console.log("Tab updated");
          updateCounter();
        }
  });

 chrome.windows.onFocusChanged.addListener(
      function(windowId) {
      		  console.log("Detected window focus changed.");
       	      resetActivity();
    chrome.tabs.getSelected(windowId,function(tab) {
          console.log("Window/Tab changed");
          currentTabId = tab.id;
          updateCounter();
        });
  });

function getSiteFromUrl(url) {
      var match = url.match(siteRegexp);
      if (match) {
        /* Check the ignored list. */
       
        return match[1];
      }
      return null;
 }

function resetActivity() {
      lastActivitySeconds = 0;
}


function updateCounter() {
         

      if (currentTabId == null) {
        return;
      }

      chrome.tabs.get(currentTabId, function(tab) {
        /* Make sure we're on the focused window, otherwise we're recording bogus stats. */
        chrome.windows.get(tab.windowId, function(window) {
          if (!window.focused) {
            return;
          }
          var site = getSiteFromUrl(tab.url);
          if (site == null) {
            console.log("Unable to update counter. Malformed url.");
            return;
          }

          /* We can't update any counters if this is the first time visiting any
           * site. This happens on browser startup. Initialize some variables so
           * we can perform an update next time. */
          if (currentSite == null) {
            currentSite = site;
            startTime = new Date();
            console.log("Current Site is " +currentSite);
            console.log("Current Start Time is" +startTime);
            return;
          }

          /* Update the time spent for this site by comparing the current time to
           * the last time we were ran. */
          var now = new Date();
          var delta = now.getTime() - startTime.getTime();
          updateTime(currentSite, delta/1000);

          /* This function could have been called as the result of a tab change,
           * which means the site may have changed. */
          currentSite = site;
          console.log("The value is"+site);

          startTime = now;
          console.log("The Current Time is "+startTime);
        });
      });
  }

  function updateTime(site, seconds){
  	   lib.insert("sites", {site: site, timeinsecs:seconds});
  	   lib.commit();
  }

