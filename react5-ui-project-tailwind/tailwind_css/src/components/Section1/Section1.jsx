import React from 'react'
import NavBar from './NavBar'
import PageOneContext from './PageOneContext'

const Section1 = (props) => {
  return (
    <div className='h-screen w-full bg-amber-50'>
        <NavBar />
        <PageOneContext users={props.users}/>
    </div>
  )
}

export default Section1