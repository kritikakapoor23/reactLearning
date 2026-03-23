import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({user:'Abhay', age:20})
  const btnClicked = () => {
    const newNum = {...num}; //...num is destructured that is newNum has the same value as num but the refernce point in memory in now changed
    newNum.user='Kritika'
    setNum(newNum)
  }

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App