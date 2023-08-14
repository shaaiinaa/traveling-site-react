import React from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false)

    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }
    return (
        <div className="flex w-full justify-between items-center h-20 px-4 absolute text-white z-20">
            <div >
                
                <h1  className={logo? 'hidden':'block'}>Beaches..</h1>
            </div>
            <ul className="hidden md:flex">
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>Views</li>
                <li>Book</li>
            </ul>
            <div className="hidden md:flex">
                <BiSearch className="mr-2"/>
                <BsPerson />
            </div>
            {/* hamburger */}
            <div onClick={handleNav} className="md:hidden z-20">
                {nav ? <AiOutlineClose className="text-black" size={20} />
                    : <HiOutlineMenuAlt4 size={20} />
                }

                {/* mobile dropdown */}
                <div className={nav ?'px-4 text-black py-7 flex flex-col absolute bg-gray-100/90  w-full left-0 top-0':'absolute left-[-100%]'}>
                    <ul>
                        <h1>Beaches..</h1>
                        <li className="border-b-2">Home</li>
                        <li className="border-b-2">Destinations</li>
                        <li className="border-b-2">Travel</li>
                        <li className="border-b-2">Views</li>
                        <li className="border-b-2">Book</li>
                        <div className="flex flex-col">
                            <button className="my-6">
                                Search
                            </button>
                            <button>
                                Account
                            </button>
                        </div>
                        <div className=" flex justify-between my-6">
                            <FaFacebook className='icon' />
                            <FaTwitter className='icon' />
                            <FaInstagram className='icon' />
                            <FaPinterest className='icon' />
                            <FaYoutube className='icon' />
                        </div>
                    </ul>
                </div>
            </div>
            </div>
            );
};

            export default Navbar;
