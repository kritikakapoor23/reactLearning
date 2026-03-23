import React, { useState } from 'react'

const App = () => {

  //const [num, setNum] = useState([10,20,30])
  //const btnClicked = () => {
    //const newNum = [...num]
    //newNum.push(99)
    //setNum(newNum)
  //}

  const [num, setNum] = useState({user:'Abhay',age:20})
  const btnClicked = () => {
    setNum (prev=>({...prev,age:50}))

  }

  //const btnClicked = () => {
  //setNum(prev => (prev+1))
  //setNum(prev => (prev+1))                this is batch update the value of num increases by 3 each time the button is clicked
  //setNum(prev => (prev+1)) }
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App