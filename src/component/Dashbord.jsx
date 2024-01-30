import React, { useState } from "react";
import '../assets/styles/dashbord.css'
import Header from './layout/Header'
import Footer  from "./layout/Footer";
export default function Dashboard() {
 
  return (
    <>
   
    <Header />
      <div className="dashbord bg-blue-300/100">
      
      <main className={`flex justify-between m-0 `} >
        <div
          id="sidebar-container"
          className="flex flex-col justify-between py-5 px-4 h-screen w-2/5 bg-cyan-950/10"
        >
          <div id="top-items">
            <h1 className="text-3xl font-bold">MenuBar</h1>
            <div className="toggle-container">
            <button 
            style={{backgroundColor:"cyan",border:"2px solid yellow"}}
            >Toggle
            </button>
            </div>
            <div id="menu-item-container" className="flex flex-col pt-10">
              <a href="/" className="py-2 px-1 my-2 bg-blue-600 rounded-r-lg">
                User accounts
              </a>

              <a
                href="/manage-apis"
                className="py-2 px-1 my-2 bg-blue-900 rounded-r-lg hover:bg-cyan-900"
              >
                API keys
              </a>
            </div>
          </div>
          <div id="bottom-items">
            <button
              className="btn">
              Sign out
            </button>
          </div>
        </div>

        <div id="account-list" className="m-8 p-4 w-full">
          <h3 className="font-strong text-3xl">User accounts</h3>
          <div className="py-10">
            {/* Your logic for rendering user accounts */}
          </div>
        </div>
      </main>
      </div>
     <Footer />
     
    </>
  );
}
