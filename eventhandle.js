var events =require("events");
var eventEmitter=new events.EventEmitter();
var myEventhandler =function (){
console.log("I hear Scream");
}

eventEmitter.on('Scream',myEventhandler);
eventEmitter.emit('Scream');