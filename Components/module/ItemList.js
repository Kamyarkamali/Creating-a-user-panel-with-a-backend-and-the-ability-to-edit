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

    const changeHandeler=(e,index)=>{
        const {name,value}=e.target
        const newProducts=[...products]
        newProducts[index][name]=value;
        setForm({...form,products:newProducts})
    };

    const removeHandeler=(index)=>{
        const newProducts=[...products];
        newProducts.splice(index,1);
        setForm({...form,products:newProducts});
    };

    return (
        <div className='item-list'>
            <p>Prosucts</p>
            {products.map((product,index)=>(
                <div className='form-input__list' key={index}>
                    <FormInput name="name" labale="product Name" type="text" value={product.name} onChang={(e)=>changeHandeler(e,index)}/>
                    <div> 
                    <FormInput name="price" labale="Price" type="text" value={product.price} onChang={(e)=>changeHandeler(e,index)}/>
                    <FormInput name="quntity" labale="quntity" type="Number" value={product.quntity} onChang={(e)=>changeHandeler(e,index)}/>
                    </div>
                    <button onClick={removeHandeler}>Remove</button>
                </div>
            ))}
            <button onClick={addHandeler}>Add Item</button>
        </div>
    );
};

export default ItemList;