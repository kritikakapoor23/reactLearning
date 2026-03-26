import React from 'react'

const App = () => {

  // const user = {
  //   name : "kritika",
  //   age : '20',
  //   city : "lucknow"
  // }

  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user);
  

  // localStorage.setItem("user",JSON.stringify(user))

  // localStorage.setItem('age','20')

  // const user = localStorage.getItem('user')
  // const age = localStorage.getItem('age')

  // localStorage.removeItem('user')
  // localStorage.removeItem('age')

  // console.log(user, age);

  return (
    <div>App</div>
  )
}

export default App