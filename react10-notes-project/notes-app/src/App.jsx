import React, { useState } from 'react'
const App = () => {

  const [Title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({Title, details})
    setTask(copyTask);
    

    setTitle('');
    setDetails('');

    const deleteNote = (idx) => {
      const copyTask = [...task];
      copyTask.splice(idx,1);
      setTask(copyTask)
      
    }
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex lg:w-1/2 items-start gap-4 flex-col p-10'>
      <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>

        <input type="text"
          placeholder='Title'
          className='px-5 py-2 w-full border-2 outline-none rounded font-medium'
          value={Title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <textarea type="text"
          placeholder='Write Details here'
          className='flex items-start flex-row px-5 py-2 h-20 w-full outline-none border-2 rounded font-medium'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
            
          }}
        />

        <button className='bg-white text-black active:scale-95 px-5 py-2 w-full outline-none rounded font-medium'>Add Notes</button>
      </form>

      <div className='p-10 lg:w-1/2 border-l-2'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto">
          {task.map(function(elem,idx){
            return <div key={idx} className='relative flex justify-between flex-col items-start h-52 w-40 text-black p-9 px-4 bg-cover rounded-2xl bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.Title}</h3>
                <p className='mt-4 leading-tight text-xs font-medium text-gray-400'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full bg-red-700 py-1 text-xs font-bold cursor-pointer active:scale-95 rounded text-white'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App