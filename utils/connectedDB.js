import mongoose from "mongoose";

async function connectedDB(){
    try{
        if(mongoose.connections[0].readyState) return
       await mongoose.connect("mongodb://kamyar:kamyar02113741374@ac-2ttayy2-shard-00-00.qf3y5sm.mongodb.net:27017,ac-2ttayy2-shard-00-01.qf3y5sm.mongodb.net:27017,ac-2ttayy2-shard-00-02.qf3y5sm.mongodb.net:27017/?ssl=true&replicaSet=atlas-32m0ng-shard-0&authSource=admin&retryWrites=true&w=majority")
        console.log("Conected")
    }catch(err){
        console.log("Error");
    }
}

export default connectedDB;