import React from 'react'
import ItemList from './ItemList'
import FormInput from './FormInput'

function Form({form,setForm}) {
  const changeHandeler=(e)=>{
  const {name,value}=e.target
    setForm({...form,[name]:value})
  }
  return (
    <div>
      <FormInput
      name="name"
      labale="name"
      type="text"
      value={form.name}
      onChang={changeHandeler}
      />
      <FormInput
      name="Lastname"
      labale="Lastname"
      type="text"
      value={form.Lastname}
      onChang={changeHandeler}
      />
      <FormInput
      name="email"
      labale="email"
      type="text"
      value={form.email}
      onChang={changeHandeler}
      />
      <FormInput
      name="phone"
      labale="phone"
      type="text"
      value={form.phone}
      onChang={changeHandeler}
      />
      <FormInput
      name="address"
      labale="address"
      type="text"
      value={form.address}
      onChang={changeHandeler}
      />
      <FormInput
      name="postalCode"
      labale="postalCode"
      type="text"
      value={form.postalCode}
      onChang={changeHandeler}
      />
      <FormInput
      name="date"
      labale="date"
      type="text"
      value={form.date}
      onChang={changeHandeler}
      />
      <ItemList form={form} setForm={setForm}/>
    </div>
  )
}

export default Form