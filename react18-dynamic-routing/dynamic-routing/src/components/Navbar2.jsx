import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    const navigate = useNavigate();

  return (
    <div className='bg-emerald-100 py-5 px-2'>
        <button onClick={() => {
        navigate('/');
      }}
        className='bg-amber-400 text-black py-2 px-5 rounded m-2 cursor-pointer active:scale-95'>
        Return to home page
      </button>
      <button onClick={() => {
        navigate(-1);
      }}
        className='bg-amber-400 text-black py-2 px-5 rounded m-2 cursor-pointer active:scale-95'>
        Previous
      </button>
      <button onClick={() => {
        navigate(+1);
      }}
        className='bg-amber-400 text-black py-2 px-5 rounded m-2 cursor-pointer active:scale-95'>
        Next
      </button>
    </div>
  )
}

export default Navbar2