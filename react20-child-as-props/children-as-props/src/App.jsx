import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, setTheme] = useState('Light')

  return (
    <div>
      <Navbar theme={theme}>
        <h2>This is a Navbar</h2>
        <h2>These are its children</h2>
      </Navbar>
    </div>
  )
}

export default App