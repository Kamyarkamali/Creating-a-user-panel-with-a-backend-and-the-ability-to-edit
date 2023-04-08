import connectedDB from "@/utils/connectedDB";
import Coustomer from "@/models/Customer";

export default async function handeler(req,res){
    try{
        await connectedDB()
    }catch(errr){
        console.log(errr)
        res.status(500).json({status:"Faild to Cannection",message:"cant connection to server"})
    }

    if(req.method==="PATCH"){
        const id=req.query.userId
        const data=req.body.data
        try{
            const customer=await Coustomer.findOne({_id:id})
            
            customer.name=data.name;
            customer.Lastname=data.Lastname;
            customer.email=data.email;
            customer.phone=data.phone;
            customer.address=data.address;
            customer.postalCode=data.postalCode;
            customer.products=data.products;
            customer.updated=Date.now();
            customer.save()
            res.status(200).json({status:"sucsses",data:customer})

        } catch(err){
            console.log(err)
            res.status(500).json({status:"Failed",message:"Problem in Server"})
        }

    }
}