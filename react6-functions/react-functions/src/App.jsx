// import React from 'react'

// const App = () => {

//   const onPageScrolling = (elem) => {
//     if(elem>0){
//       console.log('straight scrolling');
//     }  
//     else{
//       console.log('backward scrolling');
//     }  
//   }

//   return (
//     <div onWheel={(elem) => {

//       onPageScrolling(elem.deltaY);
//     }}>
//       <div className="page1"></div>
//       <div className="page2"></div>
//       <div className="page3"></div>
//     </div>
//   )
// }

// export default App


import React from 'react'

const App = () => {

  const btnClicked = () => {
    console.log('hello');
  }

  return (
    <div>
      <button>Click Here</button>
    </div>
  )
}

export default App