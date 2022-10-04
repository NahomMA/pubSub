const mqtt=require("mqtt")
const client=mqtt.connect('mqtt://192.168.1.64:1883')
const topic="iotdevice-1"

const message="Showing From the computer to Nwanua"

client.on('connect',()=>{
    setInterval(()=>{
        client.publish(topic,message)
        console.log('Message is sent',message)
    },5000)
})



