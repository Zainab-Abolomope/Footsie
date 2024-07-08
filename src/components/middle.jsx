import React from 'react'

const middle = () => {
    return (
        <section>
            <div className='flex'>
                <div className='flex flex-col '>
                    <h3>Trending Now</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dolore?</p>
                </div>
                <div>
                    <h1>sort by</h1>
                    <i></i>
                </div>


            </div>

            <div className='flex  g-[2em]'>
                
                    <div >
                        <img src="./public/product1.png" alt="" />
                        <p>Loafers Foam x</p>
                        <p>Men</p>
                        <h3>$1200</h3>
                    </div>
                    <div>
                        <img src="./public/product2.png" alt="" />
                        <p>Loafers Foam x</p>
                        <p>Men</p>
                        <h3>$1400</h3>
                    </div>
                    <div>
                        <img src="./public/product3.png" alt="" />
                        <p>Loafers Foam x</p>
                        <p>Men</p>
                        <h3>$2400</h3>
                    </div>
              
            </div>
        </section>
    )
}

export default middle