import React,{useState} from 'react'
///Component Module
import Form from '../module/Form'

function AddCustomer() {
    const [form,setForm]=useState({
        name:"",
        Lastname:"",
        phone:"",
        address:"",
        date:"",
        products:[]
    })
  return (
    <div className='customer-page'>
        <h4>Add New Item</h4>
        <Form form={form} setForm={setForm}/>
        <div className='customer-page__buttons'>
            <button className='first'>Cancel</button>
            <button className='second'>Save</button>
        </div>
    </div>
  )
}

export default AddCustomer