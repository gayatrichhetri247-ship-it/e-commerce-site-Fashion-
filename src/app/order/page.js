import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center py-12 gap-2 bg-gradient-to-r from-pink-100 via-yellow-50 to-pink-100 '>
      <div className='text-center flex flex-col gap-2'>
        <div className='text-4xl'>📦</div>
        <div className='text-4xl font-extrabold'>Your Orders</div>
        <div className='text-sm text-gray-700'> Track every pretty package on its way to you ♡</div>
      </div>
      <div className='w-full flex  flex-col p-14 gap-4'>
        <div className='text-2xl font-extrabold'>Track an order</div>
        <div className='flex gap-4'><input type='text' placeholder='Enter Your Order Number, e.g. 1234' className='w-full py-2 px-6 border rounded-3xl '/>
        <button className='px-6 py-2 bg-pink-500 text-md rounded-3xl font-extrabold text-white'>Track</button>
        </div>
      </div>
      <div className='px-10 py-14 bg-white text-center flex flex-col gap-4 items-center rounded-4xl '>
        <div className='text-6xl'>
          🛍️
        </div>
        <div className='text-3xl text-gray-800 font-extrabold mt-2'>No orders yet</div>
        <div className='w-96 text-sm text-gray-700'>Hi gayatrichhetri247! Once you place an order it will appear here.</div>
        <button className='w-38 h-12 mt-4 bg-pink-600 text-white font-extrabold text-sm rounded-3xl '>Start Shopping</button>
      </div>
    </div>
  )
}

export default page
