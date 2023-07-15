import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';


const Navbar = () => {
  return (
    <div className="max-w-[840px] mx-auto flex justify-between">
        {/* burger menu and name */}
        <div className="flex p-2 gap-3 items-center">
          <AiOutlineMenu size={30}/>
          <p className="font-semibold text-2xl sm:text-3xl  text-neutral-600">Eat <span className="font-bold text-neutral-900">Out</span></p>
        </div>
        {/* search bar */}
        <div className="flex items-center">
          <div className="hidden sm:flex items-center gap-2 bg-neutral-400 px-2 rounded-full h-8 text-white font-light">
            <AiOutlineSearch/>
            <input
            className="focus:outline-none bg-inherit placeholder-current"
            type="text"
            placeholder="Search Food"
            />
          </div>
        </div>
        {/* Order Now */}
        <div className="flex items-center">
          <div className="px-4 h-8  mr-2 border-2 border-red-500 rounded-full flex items-center bg-red-500 text-white font-semibold">
            <button type="button">Order Now</button>
          </div>
        </div>
        
        
    </div>
  )
}




export default Navbar