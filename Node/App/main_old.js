var events = require("events");
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
    console.log("Listener 1 executed");
}

var listener2 = function listener1(){
    console.log("Listener 2 executed");
}

eventEmitter.addListener("connection", listener1);

eventEmitter.on("connection", listener2);

var eventListeners = require("events").EventEmitter.listenerCount(eventEmitter,"connection");

console.log(eventListeners + " Listner(s) listening to connection event");

eventEmitter.emit("connection");

eventEmitter.removeListener("connection", listener1);

console.log("Listner1 will not listen now.");

eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");

// ----------------------------------------------------

//var events = require('events');

//var eventEmitter = new events.EventEmitter();

//var connectHandler = function connected() {
//    console.log("Connection Successful");
//    eventEmitter.emit("Data_Received");
//}

//eventEmitter.on("Connection", connectHandler);

//eventEmitter.on("Data_Received", function (params) {
//    console.log("Data Received Successfully");

//});

//eventEmitter.emit("Connection");

//console.log("Program Ended.");

//---------------------------------------------------

//var fs = require("fs");

//fs.readFile("input.txt", function(err, data){
//    if(err){
//        Console.log(err.stack);
//        return;
//    }
//    console.log(data.toString());
//});

//console.log("Program Ended");