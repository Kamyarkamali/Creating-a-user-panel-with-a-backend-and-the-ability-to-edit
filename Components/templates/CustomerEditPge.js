import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Form from '../module/Form';

const CustomerEditPge = ({data,id}) => {
    const router=useRouter()
    const [form,setForm]=useState({
        name:data.name,
        Lastname:data.Lastname,
        email:data.email,
        phone:data.phone || "",
        address:data.address || "",
        postalCode:data.postalCode || "",
        products:data.products || ""
    })

    const cancelHandeler=()=>{
        router.push("/")
    }

    const editHandeler=async()=>{
        const res=await fetch(`/api/edit/${id}`,{
            method:"PATCH",
            body:JSON.stringify({data:form}),
            headers:{"Content-Type":"application/json"}
        })
        const data=await res.json()
        if(data.status==="Sucsses") router.push("/")
    }

    return (
        <div className='customer-page'>
            <h4>Edit Customer</h4>
            <Form form={form} setForm={setForm}/>
            <div className='customer-page__buttons'>
                <button className='first' onClick={cancelHandeler}>Cancel</button>
                <button className='second' onClick={editHandeler}>Edit</button>
            </div>
        </div>
    );
};

export default CustomerEditPge;