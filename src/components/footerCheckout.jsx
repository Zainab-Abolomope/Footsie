import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";


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
                <div className='flex items-center gap-[1em]'>
                    <h1>search</h1>
                    <i><CiSearch /></i>
                    <hr />
                </div>

            </div>

            <div className='text-9xl font-bold text-center  text-gray-500  tracking-widest p-[1em]'>
                <h1 className=''>Footsie</h1>
            </div>


        </>


    )
}

export default footerCart

