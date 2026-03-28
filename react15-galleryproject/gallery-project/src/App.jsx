import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';

function App() {

  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
  }

  useEffect(function () {
    getData()
  }, [index])

  let printUserData = <h3 className='text-xs text-gray-300 font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
        <Card elem={elem} />
      </div>
    })
  }

  return (
    <div className='bg-black h-screen text-white p-4 overflow-auto'>
      <div className='flex h-[82%] flex-wrap p-2 gap-4'>
        {printUserData}
      </div>

      <div className='flex justify-center items-center gap-6 p-4'>
        <button 
        style={{opacity: index == 1?0.5 : 1}}
        onClick={() => {
          if (index > 1) {
            setIndex(index - 1)
            setUserData([])
          }
        }}
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'>
          Prev
        </button>
        <h3>Page {index}</h3>
        <button onClick={() => {
          setIndex(index + 1)
          setUserData([])
        }}
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'>
          Next
        </button>
      </div>
    </div>
  )
}

export default App