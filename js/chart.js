window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Weekly Visitors"
        },
        axisY: {
            title: "Growth Rate (in %)",
            suffix: "%",
            includeZero: false
        },
        axisX: {
            title: "Visitors"
        },
        data: [{
            type: "column",
            yValueFormatString: "#,##0.0#\"%\"",
            dataPoints: [
                { label: "Monday", y: 7.1 },	
                { label: "Tuesday", y: 6.70 },	
                { label: "Wednesday", y: 6.00 },
                { label: "Thursday", y: 6.50 },	
                { label: "Friday", y: 7.30 },
                { label: "Saturday", y: 6.80 },
                { label: "Sunday", y: 7.60 }                
            ]
        }]
    });
    setTimeout(function() {
        chart.render();
    }, 1100);

}