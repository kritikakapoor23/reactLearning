import React from 'react'

export const Navbar = (props) => {

    console.log(props);
    
  return (
    <div>
        <button onClick={ () => {
            props.setTheme('Dark')
        }}>Change theme</button>
    </div>
  )
}