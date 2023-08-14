import React from 'react'
import {AiOutlineSearch} from "react-icons/ai";
import videoGirl from "../assets/videoGirl.mp4";

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
    <video className='w-full h-full object-cover' src={videoGirl} alt="notworking" autoPlay loop muted/>
    <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
    <div className='text-white absolute top-0 w-full h-full flex flex-col justify-center text-center p-4'>
        <h1>First Class Travel</h1>
        <h2 className='py-4'>Top 1% locations worldwide</h2>
        <form className='flex justify-between border items-center p-1 max-w-[700px] mx-auto w-full rounded-md text-black bg-gray-100/90'>
            <div>
                <input className='bg-transparent font-[Poppins] w-[300px] sm:w-400px focus:outline-none' type="text" placeholder='Search Destinations'/>
            </div>
            <div>
                <button>
                    <AiOutlineSearch size={20} className='icon' style={{color: '#ffffff'}} />
                </button>
            </div>
        </form>
    </div>
    </div>
    
  )
}

export default Hero
