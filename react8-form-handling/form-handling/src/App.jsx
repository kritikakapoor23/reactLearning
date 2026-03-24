import React from 'react'

const App = () => {

  const formHandler = (e) => {
    e.preventDefault()
    console.log('Form submitted');
  }

  return (
    <div>
      <form onSubmit={(e) => {
        formHandler(e)
      }}>
        <input type="text" placeholder='Enter you name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App