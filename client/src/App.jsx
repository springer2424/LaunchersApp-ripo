import { useState } from 'react'
import {Routes, Route} from "react-router"

import './App.css'
import HomePage from './pages/HomePage'
import AddLauncherPage from './pages/AddLauncherPage'
import LauncherDetailsPage from './pages/LauncherDetailsPage'
import LoginPage, { LimitesROutd, ProtectedRouts } from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/home" element={<ProtectedRouts><HomePage/></ProtectedRouts>} />
      <Route path="/addlauncher" element={<ProtectedRouts><LimitesROutd arr={["admin","intelligence"]}><AddLauncherPage/></LimitesROutd></ProtectedRouts>} />
      <Route path="/launcherdetails" element={<ProtectedRouts><LimitesROutd arr={["admin","intelligence"]}><LauncherDetailsPage/></LimitesROutd></ProtectedRouts>} />
      <Route path="/Register" element={<ProtectedRouts><LimitesROutd arr={["admin","intelligence"]}><RegisterPage/></LimitesROutd></ProtectedRouts>} />
      <Route path="*" element={<LoginPage/>} />
      

    </Routes>
      
    </>
  )
}

export default App
