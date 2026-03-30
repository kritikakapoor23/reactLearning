import React, { createContext } from 'react'

export const ThemeDataContext = createContext();

 const ThemeContext = (props) => {            //step1 create context
  return (
    <div>
        <ThemeDataContext.Provider value = 'Kritika'>                    
            {props.children}
        </ThemeDataContext.Provider>                
    </div>                                      //step2 provide context
  )
}

export default ThemeContext