import React from 'react'
import { Link } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci";
import { FaSignal } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { CiBatteryFull } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const nav = () => {
  return (

    <>
      <div className='hidden lg:flex items-center justify-between p-[2em]'>


        <img className='w-[74px] h-[24px]' src="./public/footsie.png" alt="" />
        <div className='flex gap-[2em] text-white'>
          <Link to=''>Men</Link>
          <Link to=''>Women</Link>
          <Link to=''>Kids</Link>
        </div>
        <Link to='./cart'>
          <button className='flex w-[108] h-[35px] g-[8px] items-center p-[8px] justify-center'>
            <h1 className='text-white'>Your bag</h1>
            <i className='text-white text-2xl'><CiShoppingCart /></i>
          </button>
        </Link>


      </div>

      <div>
        <div className='flex justify-between p-[1em] text-white lg:hidden'>
          <div>
            <h1>10:41</h1>

          </div>

          <div className='flex gap-[1em]'>
            <i><FaSignal /></i>
            <i><FaWifi /></i>
            <i><CiBatteryFull /></i>
          </div>

        </div>


        <div className='flex justify-between items-ceenter p-[1em] lg:hidden'>

          <div>
            <img src="./public/frame 155.png" alt="" />

          </div>


          <div className='flex gap-[1em] text-white items-center'>
             <i><CiSearch /></i>
            <i><CiShoppingCart /></i>
          </div>
        </div>

      </div>


      {/* <div className='p-[1em] flex justify-between lg:hidden'>
        <div>
            <img src="./public/frame 155.png" alt="" /></div>
        </div>

        <div>
        <div>
            <i><CiSearch /></i>
          </div>

          <div>
            <i><CiShoppingCart /></i>
          </div>

        </div> */}













    </>

  )
}

export default nav