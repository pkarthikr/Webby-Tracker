 var sites = JSON.parse(localStorage.sites);
var totalTime  = 0;
   /* Sort sites by time spent */
   var sortedSites = new Array();
   
   for (site in sites){

      totalTime += sites[site];

   }

 


   var totalTimeinHHMMSS = secondsToTime(totalTime);
      document.write('<div class="container">');

  document.write('<div class="panel panel-default">');
  document.write('<div class="panel-heading">Webby Tracker</div>');
  document.write('<div class="panel-body">');
  
   document.write('<p>');
      document.write("Total Time Tracked [HH: MM: SS]");
      document.write(" : ");
      document.write(totalTimeinHHMMSS.h);
      document.write(":");
      document.write(totalTimeinHHMMSS.m);
      document.write(":");
      document.write(totalTimeinHHMMSS.s);
      document.write("<br>");
      document.write('</p>');
document.write('</div>');
       document.write('<table class="table">');
      document.write('<th>ID</th>');
       document.write('<th>Site</th>');
        document.write('<th>Time Spent [HH: MM: SS]</th>');
         document.write('<th>Percentage</th>');

         
      var i = 1;

   for (site in sites) {
     

     var time = secondsToTime(sites[site]);
     var hours = time.h;
     var minutes = time.m;
     var seconds = time.s;

      var timeinsecs = sites[site];
       var total = totalTime;
      var percentage = timeinsecs/total * 100;

      percentage = Math.floor(percentage);

      if(percentage > 2) {


    document.write('<tr>');
    document.write('<td>');
      document.write(i);
      document.write('</td>');
       document.write('<td>');
     document.write(site);
      document.write('</td>');
      document.write('<td>');
     document.write(hours);
     document.write(":");
     document.write(minutes);
     document.write(":");
     document.write(seconds);
     document.write('</td>');
     document.write('<td>');
     document.write(percentage);
     document.write('</td>');
     document.write('</tr>');

   document.write('</tr>');

   i++;

}
   }
document.write('</table>');
    
      document.write('</div>');

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