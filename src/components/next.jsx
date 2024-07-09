import React from 'react';

const shoes = [
  {
    name: 'Loafers Foam X',
    price: '$164.99',
    image: './public/brown-shoe.png',
    description: 'New Arrivals',
  },
  {
    name: 'Loafers Foam X',
    price: '$164.99',
    image: './public/sneaker.png',
  },
  {
    name: 'Loafers Foam X',
    price: '$164.99',
    image: './public/sneakerr.png',
  },
  {
    name: 'Loafers Foam X',
    price: '$164.99',
    image: './public/product1.png',
  },
  {
    name: 'Loafers Foam X',
    price: '$164.99',
    image: './public/product2.png',
  },
  {
    name: 'Loafers Foam X',
    price: '$164.99',
    image: './public/product3.png',
  },
];

function Next() {
  return (
    <>
      {/* Image grid section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 lg:px-16 pt-8'>
        {shoes.map((shoe, index) => (
          <div key={index} className='flex justify-center items-center'>
            <img src={shoe.image} alt={shoe.name} className='max-w-full h-auto' />
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className='mt-12 border-solid border-black' />
    </>
  );
}

export default Next;
