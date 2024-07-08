import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const nextCart = () => {
    return (

        <>
          <div  className='flex items-center justify-between py-[6em] px-[4em]'>
            <div className='flex gap-[3em]'>
                <div className='bg-gray-200 w-[50px] h-[50px] rounded-[50%]'>

                </div>
                <div className='bg-amber-950 w-[50px] h-[50px] rounded-[50%]'>

                </div>
                <div className='bg-black w-[50px] h-[50px] rounded-[50%]'>

                </div>

            </div>


            <div className='w-[407px] h-[114px]'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eveniet sapiente reiciendis dolores dolorum voluptatum vel earum facere deleniti cumque.</p>
            </div>
        </div>

        <div className='pl-[5em]'> 

            <div className='flex gap-[4em]'>
                <button>
                    <h1>size</h1>
                    <i></i>
                </button>

                <button>
                    <h1>quantity</h1>
                    <i></i>
                </button>

            </div>
            <div className='flex flex-row gap-[2em]'>
                <div className='w-[60px] h-[30px] text-black bg-slate-500'>45ER</div>
                <div className='w-[60px] h-[30px] bg-slate-500'>1 Pair</div>
              

            </div>
            <div className=' '> 
               <button className=' border-black bg-slate-200 px-3 py-2'>Proceed to checkout</button>
               <i><FaArrowRightLong/></i>

            </div>
        </div>
        <hr />
        

        </>
     
      
    )
}

export default nextCart