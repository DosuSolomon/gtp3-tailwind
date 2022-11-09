import React, {createContext}  from 'react'
export const SiteContext = createContext()

export const SiteProvider = ({children})=>{
  function handleClick(){
    console.log("hello")
  }
  const handleSave=()=>(
    console.log("Save me")
  )
  return(
    <SiteContext.Provider
    value={{
      handleClick,
      handleSave
    }}>
    {children}
    </SiteContext.Provider>
  )
}