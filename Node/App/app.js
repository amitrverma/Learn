var username = "johntimonen"
var http = require("http");

function printMessage(userName, badgehCount, totalCount){
    var message = userName + "has" + badgehCount + "total badge(s) and" + totalCount + "points in Javascript";
    console.log(message); 
}

var request = http.get("http://teamtreehouse.com/" + username+".json" , function (responses) {
    console.log(responses.statusCode);    
});