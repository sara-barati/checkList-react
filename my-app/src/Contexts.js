import React, { createContext, useState } from 'react'

export const valueContext=createContext({})
export default function Contexts({children}) {
   const [name,setName] = useState([])
  return (
    <valueContext.Provider value={{name,setName}}>
        {children}
    </valueContext.Provider>
  )
} 