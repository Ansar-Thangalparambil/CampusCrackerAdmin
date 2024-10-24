import React, { createContext, useState } from 'react'

export const editQuestionResponseContext = createContext()

function Contextshare({children}) {
    //children is a predefined props used to share data b/w all components
    //data for sharing
    const[editResponse, setEditResponse] = useState({})
  return (
    <>
        {/* provider = provide data to the components */}
        {/*  value = data to be provided */}

        <editQuestionResponseContext.Provider value={{editResponse,setEditResponse}}>
            {children}
        </editQuestionResponseContext.Provider>

    </>
  )
}

export default Contextshare