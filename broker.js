//MQTT broker
// const mosca=require("mosca")
// const settings={port:1883}
// const broker=new mosca.Server(settings)

// broker.on("ready",()=>{
//     console.log('Broker is ready')
// })

const express = require('express');
const aedes = require('aedes')();
const ws = require('websocket-stream');
const fs = require("fs");
const server = require('net').createServer(aedes.handle);
const app = express();


const ports = {
    mqtt : 1883,
    ws : 8080,
    wss : 8081,
}


const host = '192.168.1.64' // localhost


server.listen(ports.mqtt, function () {
    console.log(`MQTT Broker running on port: ${ports.mqtt}`);
});


// -------- non-SSL websocket port -------------
var wsServer = require('http').createServer(app)
ws.createServer({ server: wsServer}, aedes.handle)
wsServer.listen(ports.ws, host, function () {
    console.log('WS server listening on port', ports.ws)
})

app.get("/",(req,res)=>{
    console.log(req)
    console.log(res)
    res.send("checking my web")
})




wsServer.on("published",(packet)=>{
console.log(packet.payload.toString())
})


