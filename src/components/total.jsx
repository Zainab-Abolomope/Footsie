import React from 'react'

const total = () => {
  return (
    <>
     <div className='p-[3em]'>
        <div className='flex justify-between items-center'>
            <h1>Subtotal</h1>
            <hr />
            <h1>$1200</h1>
        </div>
        


        <div className='flex justify-between items-center'>
            <h1>Delivery Fee</h1>
            <h1>$200</h1>
            
        </div>
        
        <div className='flex justify-between items-center'>
            <h1>Total</h1>
            <h1>$1400</h1>
        </div>

        <div>
        <h3 className="text-xl font-semibold mb-4">Payment Method/delivery route</h3>

        </div>

        <div>
        <div className="flex mb-8">
           <button className="w-[80px] bg-orange-500 text-white py-2 rounded-md mr-4">Card</button>
            <button className="w-[80px] bg-gray-200 text-gray-700 py-2 rounded-md">Paypal</button>
         </div>
        </div>

        <div>
        <div className="mb-4">
            <label className="block text-gray-700">Cardholder's name</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Card number</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label className="block text-gray-700">Expiration date</label>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div className="w-1/2 ml-2">
              <label className="block text-gray-700">CVV Number</label>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
            </div>
          </div>
          <div className="mb-8">
            <label className="block text-gray-700">House address</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <button className="w-full bg-orange-500 text-white py-2 rounded-md font-bold">Place order</button>
        </div>
       



    </div>

    <hr />
    </>
   
  )
}

export default total