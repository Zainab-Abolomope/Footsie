import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { Link } from 'react-router-dom'


const nextCart = () => {
    return (

        <>
          <div  className='flex items-center justify-between py-[6em] px-[4em]'>
            <div className='flex gap-[3em]'>
                <div className='bg-gray-200 w-[50px] h-[50px] rounded-[50%]'>
                    <div className='bg-gray-200 w-[50px] h-[50px] rounded-[50%]'></div>
                    <h1>White</h1>

                </div>
                <div>
                    <div  className='bg-amber-950 w-[50px] h-[50px] rounded-[50%]'></div>
                    <h1>Brown</h1>

                </div>
                <div >
                    <div className='bg-black w-[50px] h-[50px] rounded-[50%]'></div>
                    <h1>Black</h1>

                </div>

            </div>


            <div className='w-[407px] h-[114px]'>
                <p>Through our collections, we blur the borders between high fashion and high performance. Like our sneakers by Stella MCCartney athletic clothing collection- designed to look the part inside and outside of the gym. or some of our addidas Originals lifestyle pieces, that can be worn as sports apparel too</p>
            </div>
        </div>

        <div className='pl-[5em]'> 

            <div className='flex gap-[4em] '>
                <button className='flex items-center gap-[1em] '>
                    <h1>size</h1>
                    <i><RiArrowDropDownLine/></i>
                </button>

                <button className='flex items-center gap-[1em]'>
                    <h1>quantity</h1>
                    <i><RiArrowDropDownLine/></i>
                </button>

            </div>
            <div className='flex flex-row gap-[2em]'>
                <div className='px-[3em] py-[1em] text-black border border-black mt-[2em] '>45ER</div>
                <div className='px-[3em] py-[1em] text-black border border-black mt-[2em] '>1 Pair</div>
              

            </div>
            <div className=''> 
            <Link to='/checkout'>

            <button className=' px-[3em] py-[1em] text-black border border-black mt-[5em] cursor-pointer'>Proceed to checkout
               {/* <i><FaArrowRightLong/></i> */}
               
               </button>
            </Link>
             
               

            </div>
        </div>
        <hr className='mt-[12em] border-solid border-black'  />
        

        </>
     
      
    )
}

export default nextCart