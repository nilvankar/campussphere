import React from "react";
import Header from '../layout/Header'
import '../../assets/styles/dashbord.css'
import Footer  from "../layout/Footer";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
    const navigate=useNavigate()
  return (
    <>
   
    <Header />
      <div className="dashbord bg-blue-300/100 w-screen " style={{height:'100vh'}}>
      
      <main className={`flex justify-between m-0 `} >
      
        <div id="account-list" className="m-8 p-4 w-full">
          <button onClick={()=>{
            navigate('/todos')
          }}
          className="todos text-white hover:bg-white/100 text-blue-500/100"
          style={{height:'49px',width:'84px',borderRadius:'38px',border:'2px solid'}}
          >To Dos</button>
        </div>
      </main>
      </div>
     <Footer />
     
    </>
  );
}
