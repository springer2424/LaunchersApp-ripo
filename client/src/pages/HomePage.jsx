import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react';
import Launcher from '../components/Pauncher';
import { useNavigate } from 'react-router';
import Navbar from '../components/navbar';


function HomePage() {
    const [launchers,setLaunchers] = useState(null)
    const [details,setDetails] = useState(null)
    const [render,setRender] = useState(false)
    const navegate = useNavigate()
    
    async function deleteL(l){
        console.log(l._id)
        try {
        const response = await axios.delete(`http://localhost:5000/api/launchers/${l._id}`);
        if(response){
            console.log(response)
            setRender(!render)
            
        }
        } catch (error) {
        console.error(error);
        }

        
    }

   

    async function getLaunchers() {
        try {
        const response = await axios.get('http://localhost:5000/api/launchers');
        if(response.data){
            setLaunchers(response.data.data)
        }
        } catch (error) {
        console.error(error);
        }   
    }
    


useEffect((details) => {
    if(details){
        navegate("/launcherdetails")

    }
  
},[details]);
useEffect(() => {
  getLaunchers()
}, [render]);
  
  return (
    <>
    <Navbar/>
    {!launchers ||launchers.length === 0 ? <div> no Launchers in the sistem </div> : launchers.map((l)=>(
        
        
        <>
        <Launcher
        key={l._id}
        id={l._id}
        name={l.name}
        rocketType={l.rocketType}
        latitude={l.latitude}
        longitude={l.longitude}
        city={l.city}
        
        />
        <button onClick={()=>setDetails(l)}>Details</button>
        <button onClick={()=>deleteL(l)}>DELETE</button>
       
        </>
       
    ))}

    </>
  )
}

export default HomePage

