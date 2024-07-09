import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const heroCheckout = () => {
    return (
        <>

            <div>
                <div className='text-8xl font-bold text-center mt-6 text-black '>
                    <h1 className=''>Checkout</h1>
                </div>

            </div>

            <div className='flex items-center p-[3em]'>
                <div className='mr-[5em]'><img src="./product3.png" alt="" /></div>
                <div>
                    <div>
                        <h1 className='mb-[2em]' >Loafers Foam x</h1>

                    </div>
                    <div className='flex gap-[3em] items-mb-[2em] '>
                        <div className='w-[50px] h-[50px] rounded-[50%] bg-slate-300'></div>
                        <h1>white</h1>
                    </div>

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

                </div>
                <div>
                    <div className='ml-[15em]'>
                        <h1>$1640</h1>
                    </div>
                </div>

            </div>
            <hr className='mt-[4em] mb-[3em] border-solid border-black' />
        </>

    )
}

export default heroCheckout