var fs = require("fs");

fs.readFile("input.txt", function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("Asynchronous" + data.toString());
});

var data = fs.readFileSync("input.txt");
    
console.log("Synchronous" + data.toString());

console.log("End");