import mongoose from "mongoose";

async function connectedDB(){
    try{
        if(mongoose.connections[0].readyState) return
        mongoose.connect(process.env.BASE_URL)
        console.log("Conected")
    }catch(err){
        console.log("Error");
    }
}

export default connectedDB;