import React from 'react';
import FormInput from './FormInput';

const ItemList = ({form,setForm}) => {
    const {products}=form;
    const addHandeler=()=>{
        setForm({
            ...form,
            products:[...products,{name:"" , price:"" ,quntity:""}]
        })
        console.log(products);
    }

    const changeHandeler=()=>{};

    const removeHandeler=()=>{};

    return (
        <div className='item-list'>
            <p>Prosucts</p>
            {products.map((product,index)=>(
                <div className='form-input__list' key={index}>
                    <FormInput name="name" labale="product Name" type="text" value={product.name} onChang={changeHandeler}/>
                    <div> 
                    <FormInput name="price" labale="Price" type="text" value={product.price} onChang={changeHandeler}/>
                    <FormInput name="quantity" labale="Quantity" type="Number" value={product.quntity} onChang={changeHandeler}/>
                    </div>
                    <button onClick={removeHandeler}>Remove</button>
                </div>
            ))}
            <button onClick={addHandeler}>Add Item</button>
        </div>
    );
};

export default ItemList;