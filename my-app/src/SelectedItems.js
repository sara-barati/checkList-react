import React, { useContext } from 'react'

import { valueContext } from './Contexts'

export default function Selecteditem() {
    const {name}= useContext(valueContext)

    
  return (
    <div  className="selected"> 
        <h3>SELECTED ITEMES</h3>
        <hr/>
        {name.map(item=><p>{item.name}</p> )}
    </div>
  )
}