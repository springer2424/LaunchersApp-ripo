import React from 'react'

function Launcher({id,name,rocketType,latitude,longitude,city}) {
  

  return (
    <>
    <div>{id}</div>
    <div>{name}</div>
    <div>{rocketType}</div>
    <div>{latitude}</div>
    <div>{longitude}</div>
    <div>{city}</div>
    </>
  )
}

export default Launcher

