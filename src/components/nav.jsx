import React from 'react'
import { Link } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci";

const nav = () => {
  return (
    <div className='flex items-center justify-between p-[2em]'>


    <img className='w-[74px] h-[24px]' src="./public/footsie.png" alt="" />
    <div className='flex gap-[2em] text-white'>
      <Link to=''>Men</Link>
      <Link to=''>Women</Link>
      <Link to=''>Kids</Link>
    </div>
    <button className='flex w-[108] h-[35px] g-[8px] items-center'>
      <h1 className='text-white'>Your bag</h1>
      <i className='text-white'><CiShoppingCart /></i>
    </button>

  </div>
  )
}

export default nav