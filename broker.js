//MQTT broker

// const mosca=require("mosca")
// const settings={port:1111}
// const broker=new mosca.Server(settings)

// broker.on("ready",()=>{
//     console.log('Broker is ready')
// })


const express = require('express');
const aedes = require('aedes')();
const ws = require('websocket-stream');
// const fs = require("fs");
const  net= require('net');



// Import the mongoose module
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  name: String,
  age: Number,
});


// Compile model from schema
const SomeModel = mongoose.model("SomeModel", SomeModelSchema);
// Set up default mongoose connection

const mongoDB = "mongodb://127.0.0.1/my_database";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

SomeModel.insertMany([{name:"hhfhafha",age:20

},
{name:"asfdghjkl",age:44}]);
SomeModel.save
// Create an instance of model SomeModel
const awesome_instance = new SomeModel({ name: "awesome" });

// Save the new model instance, passing a callback
awesome_instance.save((err) => {
  if (err) return handleError(err);
  // saved!
});


const app = express();


const ports = {
    mqtt : 1111,
    wsp : 3333
    
}


const host = '192.168.1.69' // localhost
const server=net.createServer(aedes.handle);
server.listen(ports.mqtt, (req,res)=> {
    console.log(req);
    console.log(`MQTT Broker running on port: ${ports.mqtt}`);
    
});
var tmp;
aedes.on("publish",(packet,client)=>{
    tmp=packet.payload.toString()
    console.log(tmp)
    });


aedes.on('publish', async function (packet, client) {
    console.log(packet.payload.toString(), 'on', packet.topic, 'to broker', aedes.id)
   })



// -------- non-SSL websocket port -------------
// var wsServer = require('http').createServer(app)
// ws.createServer({ server: wsServer}, aedes.handle)
// wsServer.listen(ports.wsp, host, function () {
//     console.log('WS server listening on port', ports.wsp)
// })

    

app.get("/",(req,res)=>{ 
    tmp=  JSON.parse(tmp);
    res.send(tmp.Temperature);
})

app.listen(ports.wsp,()=>{
console.log("web server is running at ", ports.wsp);
})






