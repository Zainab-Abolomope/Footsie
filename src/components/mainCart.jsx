import React from 'react';
import Navbar from './nav';
import HeroCart from './heroCart';

const MainCart = () => {
  return (
    <div className='main-cart md:w-full md:h-full lg:w-[1514px] lg:h-[941px]'>
      <Navbar />
      <HeroCart />
    </div>
  );
}

export default MainCart;
