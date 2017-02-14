function onGetPlayerStats() {
	event.preventDefault();
    var url = '/playerStats/';
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
    var statsList = jsonResponse['results'];
    var stringdisplay = "";
    for (var i = 0; i < statsList.length; i++) {
        stringdisplay += statsList[i];
    }
    // var fruitStr = ''
    // fruitStr += '<table><tr><th>name</th><th>rating</th></tr>'
    // for (var i = 0; i < fruitList.length; i++) {
    //     fruitStr += '<tr><td>' + fruitList[i]['name'] + '</td><td>' + fruitList[i]['rating'] + '</td></tr>'
    // }
    // fruitStr += '</table>'
    alert("callback received")
    var statsDiv = document.getElementById('displayResult');
    statsDiv.innerHTML = stringdisplay;
}