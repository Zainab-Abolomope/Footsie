import React from 'react';
import { Link } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";

const Nav = () => {
  return (
    <div className='flex items-center justify-between p-4 sm:p-6 md:p-8 lg:p-10'>
      {/* Logo */}
      <img className='w-24 sm:w-32' src="./public/footsie.png" alt="Footsie Logo" />

      {/* Navigation Links */}
      <div className='hidden md:flex gap-6 text-black'>
        <Link to='/' className='text-base'>Men</Link>
        <Link to='/' className='text-base'>Women</Link>
        <Link to='/' className='text-base'>Kids</Link>
      </div>

      {/* Cart Button */}
      <Link to='/cart' className='flex items-center'>
        <button className='flex items-center bg-gray-200 rounded-lg px-4 py-2 text-black'>
          <span className='text-base mr-2'>Your Bag</span>
          <CiShoppingCart className='text-black' />
        </button>
      </Link>
    </div>
  );
};

export default Nav;