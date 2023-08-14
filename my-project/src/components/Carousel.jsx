import React,{useState} from 'react'
import { BsArrowLeftSquareFill  } from 'react-icons/bs';
import { BsArrowRightSquareFill } from 'react-icons/bs';

const SliderData =[
  {
    url:'https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  },
  {
    url:'https://images.unsplash.com/photo-1535913989690-f90e1c2d4cfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  },
  {
    url:'https://images.unsplash.com/photo-1576158831003-d41033ec31fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  ];
const Carousel = () => {
  const[slide,setSlide]=useState(0)
  const length =SliderData.length
  console.log(length)

  const prevSlide =() =>{
    setSlide(slide===length-1 ? 0:slide+1)
  }
  const nextSlide =()=>{
    setSlide(slide=== 0 ? length-1:slide-1)
  }

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
      <BsArrowLeftSquareFill onClick={prevSlide} className='absolute top-[50%]  text-white left-8 text-3xl  '/>
      <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-white  right-8 text-3xl  cursor-pointer '/>

      {SliderData.map((item,index)=>
      ( <div className={index===slide ? 'opacity-100':'opacity-0'}>
        {index===slide && (<img src={item.url} alt="/" className='lg:w-[1200px] lg:h-[500px] rounded-md'/>)
}
      </div> ))}
    </div>
  )
}

export default Carousel
