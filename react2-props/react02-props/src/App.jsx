import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Abhay' age={21} img='https://i.pinimg.com/736x/96/61/7b/96617b4d8c47a265189679c480563ca8.jpg' />
      <Card user='Kritika' age={20} img='https://i.pinimg.com/736x/1a/54/6b/1a546b4e87226b91227412a8eb20f323.jpg' />
    </div>
  )
}

export default App