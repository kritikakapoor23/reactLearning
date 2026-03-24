import React, { useState } from 'react'

const App = () => {

  const formHandler = (e) => {
    e.preventDefault()
    console.log('Form submitted by', title);

    setTitle('')
  }

  const [title, setTitle] = useState('')

  return (
    <div>
      <form onSubmit={(e) => {
        formHandler(e)
      }}>
        <input type="text" 
        value={title}
        placeholder='Enter you name'
        onChange={(e) => {
          setTitle(e.target.value)
        }} 
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App