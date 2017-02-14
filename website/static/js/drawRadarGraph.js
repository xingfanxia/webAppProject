var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};
var randomColorFactor = function() {
    return Math.round(Math.random() * 255);
};
var randomColor = function(opacity) {
    return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')';
};

var config = {
    type: 'radar',
    data: {
        labels: ["Accel", "Agility", "React", 
    "Balance"," Stamina", "Strength", 
    "Intercept", "Position", "Vision"],
        datasets: [{
            label: "Player Stats",
            // borderColor: 'rgb(30,144,255)',
            backgroundColor: "rgba(0,191,255,0.5)",
            pointBackgroundColor: "rgba(220,220,220,1)",
            pointHoverBackgroundColor: "#fff",
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
        }
        //     label: "Skip mid dataset",
        //     borderColor: 'rgb(255, 0, 255)',
        //     backgroundColor: "rgba(0, 255, 0, 0.5)",
        //     pointBackgroundColor: "rgba(151,187,205,1)",
        //     pointHoverBackgroundColor: "#fff",
        //     data: [randomScalingFactor(), randomScalingFactor(), NaN, randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
        // },{
        //     label: "Skip last dataset",
        //     borderColor: 'rgb(0, 255, 255)',
        //     backgroundColor: "rgba(0, 0, 255, 0.5)",
        //     pointBackgroundColor: "rgba(151,187,205,1)",
        //     pointHoverBackgroundColor: "#fff",
        //     data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), NaN]
        ]
    },
    options: {
        title:{
            display:true,
            text:"Demo Chart"
        },
        elements: {
            line: {
                tension: 0.0,
            }
        },
        scale: {
            beginAtZero: true,
            reverse: false
        }
    }
};

window.onload = function() {
    window.myRadar = new Chart(document.getElementById("canvas"), config);
};

// $('#randomizeData').click(function() {
//     $.each(config.data.datasets, function(i, dataset) {
//         dataset.data = dataset.data.map(function() {
//             return randomScalingFactor();
//         });

//     });

//     window.myRadar.update();
// });

// $('#addDataset').click(function() {
//     var newDataset = {
//         label: 'Dataset ' + config.data.datasets.length,
//         borderColor: randomColor(0.4),
//         backgroundColor: randomColor(0.5),
//         pointBorderColor: randomColor(0.7),
//         pointBackgroundColor: randomColor(0.5),
//         pointBorderWidth: 1,
//         data: [],
//     };

//     for (var index = 0; index < config.data.labels.length; ++index) {
//         newDataset.data.push(randomScalingFactor());
//     }

//     config.data.datasets.push(newDataset);
//     window.myRadar.update();
// });

// $('#addData').click(function() {
//     if (config.data.datasets.length > 0) {
//         config.data.labels.push('dataset #' + config.data.labels.length);

//         $.each(config.data.datasets, function (i, dataset) {
//             dataset.data.push(randomScalingFactor());
//         });

//         window.myRadar.update();
//     }
// });

// $('#removeDataset').click(function() {
//     config.data.datasets.splice(0, 1);
//     window.myRadar.update();
// });

// $('#removeData').click(function() {
//     config.data.labels.pop(); // remove the label first

//     $.each(config.data.datasets, function(i, dataset) {
//         dataset.data.pop();
//     });

//     window.myRadar.update();
// });