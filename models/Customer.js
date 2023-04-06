import { Schema,model,models } from "mongoose";

const CoustomerSchema=new Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    Lastname:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true
    },
    phone:String,
    postacode:Number,
    address:String,
    date:Date,
    products:{
        type:Array,
        default:[]
    },
    createDate:{
        type:Date,
        default:()=>Date.now(),
        immutbale:true
    },
    updated:{
        type:Date,
        default:()=>Date.now()
    }
})

const Coustomer=models.Coustomer || model("Coustomer",CoustomerSchema)

export default Coustomer;

