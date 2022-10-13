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
const mongoose = require("mongoose");





const connectDB=require('./config/db')
// Import the mongoose module 
connectDB()
const port= process.env.PORT||4444

// Define a schema
const messageSchema = new mongoose.Schema({
  message: String,

});


// model
const PubMessage= mongoose.model("pubms", messageSchema);
const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
const ports = {
    mqtt : 1883,
    wsp : port
    
}


const host = '192.168.1.65' // localhost
const server=net.createServer(aedes.handle);
server.listen(ports.mqtt, (req,res)=> {
    console.log(req);
    console.log(`MQTT Broker running on port: ${ports.mqtt}`);
    
});
var pubms;
var tmp;
aedes.on("publish",(packet,client)=>{
    tmp=packet.payload.toString();
    pubms=new PubMessage({
        message:packet.payload.toString(),
      })

      PubMessage.insertMany(pubms,(err)=>{
        if(err){
          console.log(err)
        }
        else{
          console.log("Storing Pub message to mongoDB success")
        }
      })
   
    });


// aedes.on('publish', async function (packet, client) {
//     console.log(packet.payload.toString(), 'on', packet.topic, 'to broker', aedes.id)
//    })



// -------- non-SSL websocket port -------------
// var wsServer = require('http').createServer(app)
// ws.createServer({ server: wsServer}, aedes.handle)
// wsServer.listen(ports.wsp, host, function () {
//     console.log('WS server listening on port', ports.wsp)
// })

    

app.get("/",(req,res)=>{ 
    tmp=  JSON.parse(tmp);
    // res.send(tmp.Temperature);   
       
          res.render("pubMesMoni",{dataFromPub:tmp.Temperature});

});

app.listen(ports.wsp,()=>{
console.log("web server is running at ", ports.wsp);
})






