import React from 'react'
import bb from "../assets/bb.jpg";
import bs from "../assets/bs.jpg";
import mk from "../assets/mk.jpg";
import nn from "../assets/nn.jpg";
import vv from "../assets/vv.jpg";


const Destinations = () => {
  return (
    // <div className='flex flex-col justify-center text-center m-5'>
    //  
    //  
    // </div>
    <div className='max-w-[1240px] mx-auto py-16 px-4'>
   <h1>All-Inclusive Resorts</h1>
   <p className='py-4'>On the Carribean's Best Beaches</p>
   <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
    <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={bb} alt="" />
    <img className='w-full h-full object-cover col-span-1 md:col-span-1' src={bs} alt="" />
    <img className='w-full h-full object-cover col-span-1 md:col-span-1' src={mk} alt="" />
    <img className='w-full h-full object-cover col-span-1 md:col-span-1' src={nn} alt="" />
    <img className='w-full h-full object-cover col-span-1 md:col-span-1' src={vv} alt="" />

   </div>
    </div>
  )
}

export default Destinations
