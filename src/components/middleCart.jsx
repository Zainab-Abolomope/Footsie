import React from 'react'
import { Link } from 'react-router-dom'
const middle = () => {

    const items = [
        {
            title: 'Loafers Foam X',
            price: '$164.99',
            image: '/product1.png',
            alt: 'White loafers',
        },
        {
            title: 'Loafers Foam X',
            price: '$164.99',
            image: '/product2.png',
            alt: 'Brown loafers',
        },
        {
            title: 'Loafers Foam X',
            price: '$164.99',
            image: '/product3.png',
            alt: 'Boots in a case',
        },
    ];
    return (


       <>

        <section className='p-[5em]'>
            <div className='flex justify-between items-center mb-[4em]'>
                <div className='flex flex-col '>
                    <h3>Trending Now</h3>
                    <p>Discover the perfect blend of timeless atyle, quality and performance. Shop fotsie shoes, sneakers and gear </p>
                </div>
                <div>
                    <h1>sort by</h1>
                    <i></i>
                </div>


            </div>


            <div className=''>
                <div className='flex  gap-[4em]'>
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
                            <Link to='./cart'>
                            <img src="./public/addtobag.png" alt="" className='cursor-pointer'/>
                            </Link>
                          

                            </div>
                            
                        </div>
                    ))}
                </div>



            </div>

        

           
        </section>

        

        </ >
        
        

    )
}

export default middle