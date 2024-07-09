import React from 'react'
import { Link } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci";

const nav = () => {
  return (
    <div className='flex items-center justify-between p-[2em]'>


    <img className='w-[74px] h-[24px]' src="./public/footsie.png" alt="" />
    <div className='flex gap-[2em] text-black'>
      <Link to=''>Men</Link>
      <Link to=''>Women</Link>
      <Link to=''>Kids</Link>
    </div>
    <Link to='/cart'>
    <button className='flex w-[108] h-[35px] g-[8px] items-center'>
      <h1 className='text-black'>Your bag</h1>
      <i className='text-black'><CiShoppingCart /></i>
    </button>
    </Link>
  

  </div>
  )
}

export default nav