import React from 'react'

const feature = ({title, text}) => {
  return (
    <div className='flex flex-col'>
      <div className='bar w-10 h-1'></div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  )
}

export default feature;
