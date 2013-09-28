 var sites = JSON.parse(localStorage.sites);
var totalTime  = 0;
   /* Sort sites by time spent */
   var sortedSites = new Array();
   var totalTime = 0;

   for (site in sites){

      totalTime += sites[site];
   }

   var totalTimeinHHMMSS = secondsToTime(totalTime);
      document.write("Total Time Tracked");
      document.write("-");
      document.write(totalTimeinHHMMSS.h);
      document.write(":");
      document.write(totalTimeinHHMMSS.m);
      document.write(":");
      document.write(totalTimeinHHMMSS.s);
      document.write("<br>");


   for (site in sites) {
     

     document.write(site);
     document.write(" - ");
    
     var time = secondsToTime(sites[site]);
     var hours = time.h;
     var minutes = time.m;
     var seconds = time.s;


     document.write(hours);
     document.write(":");
     document.write(minutes);
     document.write(":");
     document.write(seconds);


     document.write(" -  ");

     var time = sites[site];
     var total = totalTime;
     var percentage = time/total * 100;

     document.write(percentage);

     document.write("<br>");
  

   }



   


function secondsToTime(secs)
{
    var hours = Math.floor(secs / (60 * 60));

    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);

    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);

    var obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
    };
    return obj;
}