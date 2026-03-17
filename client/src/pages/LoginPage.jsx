import React, { useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router'
import Navbar from '../components/navbar';
export function ProtectedRouts({children}){
    const token = JSON.parse(localStorage.getItem("token"));
    return token ? children : <Navigate to={"/"} />

}

export function LimitesROutd({children,arr}){
    const user = JSON.parse(localStorage.getItem("user"));
    if(!user){
         <Navigate to={"/"} />
    }
    const aloud = arr.includes(user.user_type)
       
    
     
    return aloud ? children : <Navigate to={"/"} />



}

function LoginPage() {
    const [username,setUserName] = useState(null)
    const [password,setPassword] = useState(null)
    const navegate = useNavigate()
    function preventDifolt(e){
        e.preventDefault()
    }
    const logIn = async()=>{
        try{
            const response = await axios.post('http://localhost:5000/api/auth/login',{
            username,
            password
             })
        if(response){
            localStorage.setItem("token", JSON.stringify(response.data.data.token));
            localStorage.setItem("user", JSON.stringify(response.data.data.user));
            navegate("/home")


        }
    } catch (error) {
        console.error(error);
    }   
}


return (
    <>
    <div>LoginPage</div>
    <Navbar/>
    
    <form onSubmit={preventDifolt}>
        <label htmlFor="username">username</label>
        <input onChange={(e)=>setUserName(e.target.value)} type="text" id='username'/>
        <label htmlFor="password">password</label>
        <input onChange={(e)=>setPassword(e.target.value)} type="password" id='password'/>
        <button type='submit' onClick={()=>logIn()}>login</button>
    </form>
    </>
  )
}

export default LoginPage
// authorization
// const items = JSON.parse(localStorage.getItem("myItems"));