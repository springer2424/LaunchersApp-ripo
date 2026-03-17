import React from 'react'
import { NavLink } from 'react-router'

function navbar() {
  return (
    <>
    <div>

    <NavLink to={"/home"}>home</NavLink>
    <NavLink to={"/addlauncher"}>addlauncher</NavLink>
    <NavLink to={"/launcherdetails"}>launcherdetails</NavLink>
    <NavLink to={"/Register"}>ccreateUser</NavLink>
    <NavLink to={"/"}>logIn</NavLink>
    </div>
    </>
  )
}

export default navbar