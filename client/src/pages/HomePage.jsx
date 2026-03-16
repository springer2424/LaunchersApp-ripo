import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react';
import Launcher from '../components/Pauncher';

function HomePage() {
    const [launchers,setLaunchers] = useState(null)
    // const [detals,setdetals] = useState(null)
    // console.log(detals)

   

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
    

useEffect(() => {
  getLaunchers()
}, []);
  
  return (
    <>
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
       
        </>
       
    ))}

    </>
  )
}

export default HomePage

