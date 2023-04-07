//DataBase
import connectedDB from "@/utils/connectedDB";
import Coustomer from "@/models/Customer";

//Component in Template
import HomePage from "@/Components/templates/HomePage";

export default function Home({coustomers}) {
 
  return (
    <>
      <HomePage coustomers={coustomers}/>
    </>
  )
}


export async function getServerSideProps(){

  try{
    await connectedDB()
    const coustomers=await Coustomer.find()
    return{
      props:{
        coustomers:JSON.parse(JSON.stringify(coustomers))
      }
    }
  }catch(err){
    return{
      notFound:true
    }
  }
}