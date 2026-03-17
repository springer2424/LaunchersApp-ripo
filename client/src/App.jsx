import { useState } from 'react'
import {Routes, Route} from "react-router"

import './App.css'
import HomePage from './pages/HomePage'
import AddLauncherPage from './pages/AddLauncherPage'
import LauncherDetailsPage from './pages/LauncherDetailsPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/home" element={<HomePage/>} />
      <Route path="/addlauncher" element={<AddLauncherPage/>} />
      <Route path="/launcherdetails" element={<LauncherDetailsPage/>} />

    </Routes>
      
    </>
  )
}

export default App
