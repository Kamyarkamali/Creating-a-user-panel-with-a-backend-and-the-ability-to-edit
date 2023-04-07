import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const Card = ({customer}) => {
    const router=useRouter()

    const deleteHandeler=async()=>{
        const res=await fetch(`/api/delete/${customer._id}`,{
            method:"DELETE",
        })
        const data=await res.json()
        console.log(data)
        if(data.status==="Sucsses") router.reload() 
    }

    return (
        <div className='card'>
            <div className='card__details'>
            <p>
                {customer.name} {customer.Lastname}
            </p>
            <p>{customer.email}</p>
            </div>
            <div className='card__buttons'>
            <button onClick={deleteHandeler}>Delete</button>
            <Link href={`/edit/${customer._id}`}>Edite</Link>
            <Link href={`/customer/${customer._id}`}>Detailse</Link>
            </div>  
        </div>
    );
};

export default Card;