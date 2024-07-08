import React from 'react'
import { Link } from 'react-router-dom'

const footerCart = () => {
  return (

    <>
     <div className='p-[4em] flex justify-between items=center'>
        <div className='flex gap-5'>
            <Link>Men</Link>
            <Link>Women</Link>
            <Link>Kid</Link>
            <Link>Bags</Link>
        </div>
        <div className=''>
            <img src="./public/search.png" alt=""  className='bg-black'/>
        </div>

    </div>

    <div className='p-[6em]'>
        <img src="./public/footsiee.png" alt=""  />
    </div>

    
    </>
   
   
  )
}

export default footerCart