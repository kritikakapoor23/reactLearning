import React, { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [num1, setNum1] = useState(100)
  useEffect(function () {
    console.log('use effect is running');
  }, [num])                      //array of dependency 
  return (
    <div>
      <h1>value if num1 is {num}</h1>
      <h1>value if num2 is {num1}</h1>
      <button onMouseEnter={() => {
        setNum(num + 1)         //mounting
      }}

        onMouseLeave={() => {
          setNum1(num1 + 10)
        }}>Hover
      </button>
    </div>
  )
}

export default App