import React from 'react'
import { NavLink } from 'react-router'

function navbar() {
  return (
    <>
    <NavLink to={"/"}>home</NavLink>
    <NavLink to={"/addlauncher"}>addlauncher</NavLink>
    <NavLink to={"/launcherdetails"}>launcherdetails</NavLink>
    </>
  )
}

export default navbar