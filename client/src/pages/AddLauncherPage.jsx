import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Navbar from '../components/navbar'

function AddLauncherPage() {
    const [name,setName] = useState(null)
    const [rocketType,setRocketType] = useState("Shahab3")
    const [latitude,setLatitude] = useState(null)
    const [longitude,setLongitude] = useState(null)
    const [city,setCity] = useState(null)
    function preventDifolt(e){
        e.preventDefault()
    }

    async function saveLauncher() {
        try{
            const response = await axios.post('http://localhost:5000/api/launchers',{
            name,
            rocketType,
            latitude,
            longitude,
            city
          })
        if(response){
            console.log(response)
            
        }
        } catch (error) {
        console.error(error);
        }   
    }
  return (
    <>
    <div>AddLauncherPage</div>
    <Navbar/>
    
    <form onSubmit={preventDifolt}>
        <label htmlFor="name">name</label>
        <input onChange={(e)=>setName(e.target.value)} type="text" id='name'/>
        <label htmlFor="rocketType">rocketType</label>
        <select onChange={(e)=>setRocketType(e.target.value)} name="rocketType" id="rocketType" >
           <option value="Shahab3">Shahab3</option>
           <option value="Fetah110">Fetah110</option>
           <option value="Radwan">Radwan</option>
           <option value="Kheibar">Kheibar</option>
         </select>
        <label htmlFor="latitude">latitude</label>
        <input onChange={(e)=>setLatitude(e.target.value)} type="number" id='latitude'/>
        <label htmlFor="longitude">longitude</label>
        <input onChange={(e)=>setLongitude(e.target.value)} type="number" id='longitude'/>
        <label htmlFor="city">city</label>
        <input onChange={(e)=>setCity(e.target.value)} type="text" id='city'/>
        <button type='submit' onClick={()=>saveLauncher()}>send</button>
    </form>
    </>
  )
}

export default AddLauncherPage
 