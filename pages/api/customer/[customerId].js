import connectedDB from "@/utils/connectedDB";
import Coustomer from "@/models/Customer";

export default async function hanlere(req,res){
    try{
        await connectedDB()
    }catch(err){
        console.log(err)
        res.status(200).json({status:"Failde",message:"Failed to Connection"})
    }

    if(req.method==="GET"){
        const id=req.query.customerId

        try{
            const customer=await Coustomer.findOne({_id:id})
            res.status(200).json({status:"Sucsses",data:customer})
        } catch(err){
            console.log(err)
            res.status(500).json({status:"Failed",message:"Problem In Server"})
        }

    }
}