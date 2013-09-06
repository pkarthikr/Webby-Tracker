 var sites = JSON.parse(localStorage.sites);

   /* Sort sites by time spent */
   var sortedSites = new Array();
   var totalTime = 0;
   for (site in sites) {
     sortedSites.push([site, sites[site]]);
     totalTime += sites[site];
     document.write(site);
     document.write(" - ");
     document.write(sites[site]);
     document.write("<br>");
   }
   sortedSites.sort(function(a, b) {
     return b[1] - a[1];
   });

   /* Show only the top 15 sites by default */
   var max = 15;
   if (document.location.href.indexOf("show=all") != -1) {
     max = sortedSites.length;
   }


// var chartData = [
//       {
//         value : Math.random(),
//         color: "#D97041"
//       },
//       {
//         value : Math.random(),
//         color: "#C7604C"
//       },
//       {
//         value : Math.random(),
//         color: "#21323D"
//       },
//       {
//         value : Math.random(),
//         color: "#9D9B7F"
//       },
//       {
//         value : Math.random(),
//         color: "#7D4F6D"
//       },
//       {
//         value : Math.random(),
//         color: "#584A5E"
//       }
//     ];

//     console.log(chartData);

//   var myPolarArea = new Chart(document.getElementById("canvas").getContext("2d")).PolarArea(chartData);