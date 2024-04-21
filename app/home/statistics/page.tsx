'use client'
import React, { useState } from 'react'

const SatisticsPage = () => {
  const [userSummary,setuserSummary] = useState([])
  const [vehicalSummary, setvehicalSummary] = useState([])
  const [domitorySummary, setDomitorySummary] = useState([])
  const [toppersSummary, setToppersSummary] = useState([])
  const [visitorsSummary, setvisitorsSummary] = useState([])
  const [teachingplanSummary, setteachingplanSummary] = useState([])
  const submodules=[

{label: "User Summary"},
{label:   "Vehical Summary"},
{label:   "Dimitory Summary"},
{label:   "Toppers"},
{label:   "Visitors"},
{label:  "Teaching Plan Summary"}
  ]
  const onclick=()=>{
    console.log('click');
    
  }
  return (
    <div className='w-screen h-screen'>
    <button className='border-2 rounded-lg bg-blue-400 text-white hover:text-blue-400 hover:brightness-100 brightness-95' onClick={()=>setuserSummary([])}>User Summary</button>
    <button className='border-2 rounded-lg bg-blue-400 text-white hover:text-blue-400 hover:brightness-100 brightness-95' onClick={()=>setvehicalSummary([])}>Vehical Summary</button>
    <button className='border-2 rounded-lg bg-blue-400 text-white hover:text-blue-400 hover:brightness-100 brightness-95' onClick={()=>setDomitorySummary([])}>Domitory Summary</button>
    <button className='border-2 rounded-lg bg-blue-400 text-white hover:text-blue-400 hover:brightness-100 brightness-95' onClick={()=>setToppersSummary([])}>Toppers Summary</button>
    <button className='border-2 rounded-lg bg-blue-400 text-white hover:text-blue-400 hover:brightness-100 brightness-95' onClick={()=>setvisitorsSummary([])}>Visitors Summary</button>
    <button className='border-2 rounded-lg bg-blue-400 text-white hover:text-blue-400 hover:brightness-100 brightness-95' onClick={()=>setteachingplanSummary([])}>Teaching Plan Summary</button>
    </div>
  )
}

export default SatisticsPage