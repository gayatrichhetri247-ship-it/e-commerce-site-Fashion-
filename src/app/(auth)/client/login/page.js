import React from 'react'
import Link from "next/link";
const page = () => {
  return (
    <div className='flex justify-center p-14'>
    <div className='flex flex-col items-center border border-pink-200 bg-pink-200 w-[400px] h-fit p-6 rounded-2xl'>
      <div className='flex flex-col items-center gap-1'>
        <div className='text-4xl'>🎀</div>
        <div className='text-3xl font-bold'>Welcome back</div>
        <div className='text-sm text-gray-700 '>Log in to track orders & save your faves.</div>
      </div>
      <div className='w-full bg-pink-300 flex gap-4 rounded-2xl mt-4 '>
        <button className='w-1/2 py-1 px-2 border border-pink-300 rounded-2xl bg-pink-500 text-white text-sm font-bold '>Login</button>
        <button className='w-1/2 py-1 px-2 border border-pink-300 rounded-2xl bg-pink-500 text-white text-sm font-bold '>Sign up</button>
      </div>
      <form className='mt-4 w-full flex flex-col gap-4'>
        <div className='flex flex-col gap-2 w-full'>
          <label className='font-bold'>Email</label>
          <input type='email' placeholder='daisy@gmail.com' className='py-2 px-4 border-2 rounded-2xl border-t-black border-l-black border-b-gray-500 border-r-gray-500 bg-white' />
        </div>

        <div className='flex flex-col gap-2 w-full '>
          <label className='font-bold'>Password</label>
          <input type='password' placeholder='' className='py-2 px-4 border-2 rounded-2xl border-t-black border-l-black border-b-gray-500 border-r-gray-500 bg-white' />
        </div>

      </form>
      
      
      <Link href="/" className='block w-full' ><button className=' p-2 w-full mt-4 bg-pink-600 rounded-2xl text-white font-bold'>Login ♡</button></Link> 
      
    </div>
    </div>
  )
}

export default page
