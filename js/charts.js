
var ctx = document.getElementById("myAreaChart").getContext('2d');

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: ["Aug 1",	"Aug 3",	"Aug 5",	"Aug 7",	"Aug 9",	"Aug 13"],
      datasets: [{
          label: 'Series 1', // Name the series
          data: [	10000,	30000,	35000,	30000,	20000, 40000], // Specify the data values array
          fill: true,
          borderColor: '#da4167', // Add custom color border (Line)
          pointBorderColor: "#da4167", // blue point border
          pointBackgroundColor: "#da4167",
          backgroundColor: '#9b98ae', // Add custom color background (Points and Fill)
          borderWidth: 1 // Specify bar border width
      }]
  },
  options: {
      plugins:{   
          legend: {
            display: false
                  },
               },
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
  }
});



new Chart(document.getElementById("myLinearChart"), {
  type: 'line',
  data: {
    labels: ["Januray","February","March","April","May","June"],
    datasets: [{ 
        data: [1,1.5,2.5,4,5,3],
        label: "June",
        borderColor: "#da4167",
        fill: true,
        backgroundColor: '#e4e4e4',
        pointBorderColor: "#da4167", // blue point border
      pointBackgroundColor: "#da4167"

      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'World population per region (in millions)'
    },    plugins:{   
      legend: {
        display: false
              },
           },  responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
  }
});



new Chart(document.getElementById("myBarChart"), {
  type: 'bar',
  data: {
    labels: ["June", "July", "August", "September", "October","November","December"],
    datasets: [
      {
        label: "Men",
        backgroundColor: "#37315e",
        data: [4000,4500,13000,5000,7000,9000,11000]
      },{      label: "Women",
      backgroundColor:"#da4167",
      data: [6000,6000,15000,7000,7000,10000,14000]}
    ]
  },
  options: {
    
    title: {
      display: false      },
            responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
  }
});


new Chart(document.getElementById("myPieChart"), {
  type: 'pie',
  data: {
    labels: ["Riyadh", "Jaddah", "Sharqia", "Mecca"],
    datasets: [{
      label: "Population (millions)",
      backgroundColor: ["#e16785", "#5f5a7e","#e16782","#47527b"],
      data: [156,70,40,94]
    }]
  },
  options: {
    
       responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false 
  }
});

