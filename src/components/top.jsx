import React from 'react'
import { Link } from 'react-router-dom'

const top = () => {
  return (
    <>
      <div className='hidden lg:flex max-w-[1102px] max-h-[372px] m-auto'>
        <img src="./public/footsiee.png" alt="" />

      </div>

      <div className=' text-white w-[407px] h-[197px] relative top-[5em]  left-[223px] text-center '>
        <p className=''>Through our collections, we blur the borders between high fashion and high performance. Like our sneakers by Stella MCCartney athletic clothing collection- designed to look the part inside and outside of the gym. or some of our addidas Originals lifestyle pieces, that can be worn as sports apparel too</p>
         <Link to='./cart'>
         <img className='cursor-pointer'src="./public/explore.png" alt=""  />
         </Link>
        
      </div>

      <div>
        <img src="./search.png" className='w-[234px] h-[40px] relative left-[70em] top-[8em] ' alt="" />
      </div>
      
      
      </>






  )
}

export default top