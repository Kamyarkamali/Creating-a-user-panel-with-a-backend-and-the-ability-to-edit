///Connection
import connectedDB from "@/utils/connectedDB";
import Coustomer from "@/models/Customer";

export default async function handeler(req,res){
    try{
        await connectedDB()
    }catch(error){
        console.log("Error Conction to Server")
        res.status(500).json({status:"Error",messaage:"Error Conction to Server"})
        return
    }

    if(req.method==="POST"){
        const data=req.body.data

        if(!data.name || !data.Lastname || !data.email) return res.status(400).json({status:"Invalid",messaage:"Invalid Data"})

        try{
            const customer=await Coustomer.create(data)
            res.status(200).json({status:"Succsess",message:"Created Data",data:customer})
        }catch(error){
            console.log(error)
            res.status(500).json({status:"Failed",message:"Invalid Data"})
        }

    }
}

