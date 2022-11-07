import React from 'react'
export const SiteContext = React.createContext()

export const SiteProvider = ({children})=>{
  function handleClick(){
    console.log("hello")
  }
  return(
    <SiteContext.Provider
    value={{
      handleClick
    }}>
    {children}
    </SiteContext.Provider>
  )
}