const mongoose=require("mongoose")
// const color=require("color")
MONGO_URI="mongodb+srv:use urs form Mondodb.bmvknmt.mongodb.net/pubsubpro?retryWrites=true&w=majority"
const connectDB=async() => {
    try{
        const conn=await mongoose.connect(MONGO_URI)
        console.log(`mongoDB connected ${conn.connection.host}`)

    }
    catch(error){
        console.log(error)
        process.exit(1)

    }
}

module.exports=connectDB
