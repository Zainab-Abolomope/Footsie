import React from 'react'

const middle = () => {

    const items = [
        {
            title: 'Loafers Foam X',
            price: '$164.99',
            image: './public/product1.png',
            alt: 'White loafers',
        },
        {
            title: 'Loafers Foam X',
            price: '$164.99',
            image: './public/product2.png',
            alt: 'Brown loafers',
        },
        {
            title: 'Loafers Foam X',
            price: '$164.99',
            image: './public/product3.png',
            alt: 'Boots in a case',
        },
    ];
    return (




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
                            <img src="./public/addtobag.png" alt="" />

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