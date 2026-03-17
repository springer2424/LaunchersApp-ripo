import React, { useState } from 'react'
import axios from 'axios'
import Navbar from '../components/navbar'

function RegisterPage() {
    const [usernameh,setUsernameh] = useState(null)
    const [password,setPassword] = useState(null)
    const [email,setEmail] = useState(null)
    const [user_type,setUser_type] = useState(null)
    function preventDifolt(e){
        e.preventDefault()
    }
    async function createUser() {
        try{
            const token = JSON.parse(localStorage.getItem("token"));
            console.log(token)
            const response = await axios.post('http://localhost:5000/api/auth/register/create',{
            usernameh,
            password,
            email,
            user_type
            },{
                headers : { authorization :`Bearer ${token}`}
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
    <div>RegisterPage</div>
    <Navbar/>
    <form onSubmit={preventDifolt}>
        <label htmlFor="username">username</label>
        <input onChange={(e)=>setUsernameh(e.target.value)} type="text" id='username'/>
        <label htmlFor="password">password</label>
        <input onChange={(e)=>setPassword(e.target.value)} type="password" id='password'/>
        <label htmlFor="email">email</label>
        <input onChange={(e)=>setEmail(e.target.value)} type="email" id='email'/>
        <label htmlFor="user_type">user_type</label>
        <input onChange={(e)=>setUser_type(e.target.value)} type="text" id='user_type'/>
        <button type='submit' onClick={()=>createUser()}>save</button>

    </form>
    </>
  )
}

export default RegisterPage
