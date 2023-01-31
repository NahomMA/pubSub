// MQTT subscriber

const mqtt=require("mqtt")
const client=mqtt.connect('mqtt://hostIP:1883')
const topic="iotdevice-1"
client.on("message",(topic, message)=>{
    message=message.toString()
    console.log(message)
})

client.on('connect',()=>{
    client.subscribe(topic)
})
