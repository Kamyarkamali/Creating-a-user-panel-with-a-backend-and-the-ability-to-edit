import React,{useState,useEffect} from 'react';
import CustomerEditPge from '@/Components/templates/CustomerEditPge';
import { useRouter } from 'next/router';

const customerId = () => {
    const [data,setData]=useState(null);

    const router=useRouter();
    const {query:{customerId},isReady}=router;

    useEffect(()=>{
        if(isReady){
            fetch(`/api/customer/${customerId}`)
            .then(res=>res.json())
            .then((data)=>setData(data.data))
        }
    },[])

   if(data) return <CustomerEditPge data={data} id={customerId}/>
};

export default customerId;