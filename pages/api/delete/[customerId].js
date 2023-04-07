import connectedDB from "@/utils/connectedDB";
import Coustomer from "@/models/Customer";

export default async function handeler(req,res){
    try{
        await connectedDB()

    }catch(err){
        res.status(500).json({status:"failed",message:"Not Conection in Server"})
        return
    }

    if(req.method==="DELETE"){
        const id=req.query.customerId
        console.log(id)
        try{
            await Coustomer.deleteOne({_id:id})
            res.status(200).json({status:"Sucsses",message:"Deleted Data"})
        } catch(err){
            console.log(err.message)
            res.status(500).json({status:'Failed clear',message:"Error in Deleting Data"})
        }
    }
}