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
    <div className='flex items-center justify-center'>
        <div>
            <div>
                <img src="./public/brown-shoe.png" alt="" />
            </div>
        </div>
        <div>
            <div>
            <img src="./public/mens.png" alt="" />
          <img src="./public/shoes.png" alt="" />

            </div>
            <div className='flex'>
                <img src="./public/sneaker.png" alt="" />
                <img src="./public/sneakerr.png" alt="" />
            </div>
           
        </div>
    </div>
  );
}

export default Next;