const mqtt=require("mqtt")
const client=mqtt.connect('mqtt://192.168.1.69:1111')
const topic="iotdevice-1"

var message={
   
         Temperature: [1,2,3,4,5,6,7,8,9,10]
   
  }
client.on('connect',()=>{
    setInterval(()=>{
        client.publish(topic,JSON.stringify(message))
        console.log('Message is sent',message)
    },5000)
})



