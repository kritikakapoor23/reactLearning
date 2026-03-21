import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users);
  return (
    <div id='right' className='h-full overflow-x-auto rounded-4xl flex flex-nowrap gap-7 p-6 w-2/3 bg-blue-200'>
        {props.users.map(function(elem, idx){
          return<RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag} />
        })}
    </div>
  )
}

export default RightContent