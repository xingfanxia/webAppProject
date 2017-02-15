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
        	scaleOverride: true,
            label: "Player Stats",
            scaleStartValue: 0,
            // borderColor: 'rgb(30,144,255)',
            backgroundColor: "rgba(0,191,255,0.5)",
            pointBackgroundColor: "rgba(220,220,220,1)",
            pointHoverBackgroundColor: "#fff",
            data: [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN]
        }]
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

function updateGraph(listATTR) {
	config.data.datasets[0].data = listATTR;
	window.myRadar.update();
}

$( function() {
	var availableTags = [
	"ActionScript",
	"AppleScript",
	"Asp",
	"BASIC",
	"C",
	"C++",
	"Clojure",
	"COBOL",
	"ColdFusion",
	"Erlang",
	"Fortran",
	"Groovy",
	"Haskell",
	"Java",
	"JavaScript",
	"Lisp",
	"Perl",
	"PHP",
	"Python",
	"Ruby",
	"Scala",
	"Scheme"
	];
	$( "#srch-term-player" ).autocomplete({
		source: availableTags
	});
	$( "#srch-term-compare1" ).autocomplete({
		source: availableTags
	});
	$( "#srch-term-compare2" ).autocomplete({
		source: availableTags
	});
	$( "#srch-term-similar" ).autocomplete({
		source: availableTags
	});
} );

function onGetPlayerStats() {
	event.preventDefault();
	var srchTerm = document.getElementById('srch-term-player').value;
    var url = '/playerStats/'+srchTerm;
    xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open('get', url);
    xmlHttpRequest.onreadystatechange = function() {
        if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
            playerStatsCallback(JSON.parse(xmlHttpRequest.response));
        }
    }
    
    xmlHttpRequest.send(null)
}

function playerStatsCallback(jsonResponse) {
	var attributes = ["Surname", "Name", "Age", "Accel", "Agility", "React", 
		"Balance"," Stamina", "Strength", 
		"Intercept", "Position", "Vision"]
    var statsList = jsonResponse['results'];
    if (statsList == -1) {
    	alert("Please Enter the right full name of the player!")
    } else {
	    var stringdisplay = "";
	    stringdisplay += "<ul>"
	    for (var i = 0; i < statsList.length; i++) {
	    	stringdisplay += "<li>" + attributes[i] + ": " + statsList[i] + "</li>";
	    }
	    stringdisplay += "</ul>"
	    // var fruitStr = ''
	    // fruitStr += '<table><tr><th>name</th><th>rating</th></tr>'
	    // for (var i = 0; i < fruitList.length; i++) {
	    //     fruitStr += '<tr><td>' + fruitList[i]['name'] + '</td><td>' + fruitList[i]['rating'] + '</td></tr>'
	    // }
	    // fruitStr += '</table>'
	    var statsDiv = document.getElementById('displayResult');
	    statsDiv.innerHTML = stringdisplay;
	    var passList = statsList.slice(3);
	    updateGraph(passList);    	
    }

}

