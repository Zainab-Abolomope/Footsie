import React , { useState} from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const middle = () => {
    const [isOpen, setIsOpen]= useState(false)

    const toggleDropDown =()=>{
        setIsOpen(!isOpen)
    }

    const items = [
        {
            title: 'Loafers Foam X',
            price: '$164.99',
            image: './product1.png',
            alt: 'White loafers',
        },
        {
            title: 'Loafers Foam X',
            price: '$164.99',
            image: './product2.png',
            alt: 'Brown loafers',
        },
        {
            title: 'Loafers Foam X',
            price: '$164.99',
            image: './product3.png',
            alt: 'Boots in a case',
        },
    ];
    return (




        <section className='p-[5em]'>
            <div className='flex justify-between items-center mb-[4em]'>
                <div className='flex flex-col w-[461px] h-[99px] '>
                    <h1 className='font-bold text-2xl'>Trending Now</h1>
                    <p className='hidden lg:flex'>Discover the perfect blend of timeless atyle, quality and performance. Shop fotsie shoes, sneakers and gear </p>
                </div>
                <div onClick={toggleDropDown} className='flex items-center gap-[0.5em] text-orange-500 text-[1.6em] cursor-pointer '>
                    <h1>sort by</h1>
                    <i >{isOpen? <RiArrowDropDownLine /> : <RiArrowDropUpLine/> }</i>
                </div>


            </div>


            <div className=''>
                <div className=' lg:flex flex-row gap-[4em]'>
                    {items.map((item, index) => (
                        <div key={index} className='flex flex-col'>
                            <div className='relative '>
                            <img src={item.image} alt={item.alt}  className='hover:scale-105 duration-300'/>
                                
                            </div>
                            <div className='relative bottom-[80px] left-[30px] text-white  '>
                            <p>{item.title}</p>
                            <p>Men</p>
                            <h3>{item.price}</h3>

                            </div>
                          
                          
                            <div className=''>
                            <img src="./addtobag.png" alt="" />

                            </div>
                            
                        </div>
                    ))}
                </div>



            </div>

        

            {/* <div className='flex gap-[4em]'>


                <div >
                    <img src="./public/product1.png" alt="" />

                    <p className='relative bottom-[4em]'>Loafers Foam x</p>
                    <p className='relative bottom-[5em
                        ]'>Men</p>
                    <h3 className='relative'>$1200</h3>
                    <img src="./public/addtobag.png" alt="" />
                </div>
                <div>
                    <img src="./public/product2.png" alt="" />
                    <p>Loafers Foam x</p>
                    <p>Men</p>
                    <h3>$1400</h3>
                    <img src="./public/addtobag.png" alt="" />
                </div>
                <div>
                    <img src="./public/product3.png" alt="" />
                    <p>Loafers Foam x</p>
                    <p>Men</p>
                    <h3>$2400</h3>
                    <img src="./public/addtobag.png" alt="" />
                </div>

            </div>  */}
        </section>

    )
}

export default middle