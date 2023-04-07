import React,{useState} from 'react'
import { useRouter } from 'next/router'
///Component Module
import Form from '../module/Form'

function AddCustomer() {
    const router=useRouter()
    const [form,setForm]=useState({
        name:"",
        Lastname:"",
        phone:"",
        address:"",
        date:"",
        postalCode:"",
        products:[]
    })

    const cancelHandeler=()=>{
        setForm({
            name:"",
            Lastname:"",
            phone:"",
            address:"",
            date:"",
            products:[]
        })
        router.push("/")
    }

    const savelHandeler=async()=>{
        const res= await fetch("/api/customer",{
            method:"POST",
            body:JSON.stringify({data:form}),
            headers:{"Content-Type":"application/json"}
        })
        const data=await res.json()
        console.log(data)
        
        if(data.status==="Succsess") router.push("/")
    }



  return (
    <div className='customer-page'>
        <h4>Add New Item</h4>
        <Form form={form} setForm={setForm}/>
        <div className='customer-page__buttons'>
            <button className='first' onClick={cancelHandeler}>Cancel</button>
            <button className='second' onClick={savelHandeler}>Save</button>
        </div>
    </div>
  )
}

export default AddCustomer