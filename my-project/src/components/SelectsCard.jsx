import React from 'react'


const SelectsCard = (props) => {
  return (
    
       <div className="relative">
        <img className='h-full w-full object-cover' src={props.bg} alt="/" />
        <div className="absolute top-0 left-0 bg-gray-900/30 w-full h-full">
          <p className="absolute bottom-4 font-bold left-4 text-2xl text-white">
           {props.text}
          </p>
        </div>
      </div>
    
  )
}

export default SelectsCard
