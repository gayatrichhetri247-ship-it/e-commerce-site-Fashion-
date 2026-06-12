import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className='flex justify-center p-14 bg-gradient-to-r from-pink-100 via-yellow-50 to-pink-50'>
    <div className='flex flex-col items-center border border-pink-200 bg-pink-100 w-[400px] h-fit p-6 rounded-2xl shadow-2xl shadow-pink-300'>
      <div className='flex flex-col items-center gap-1'>
        <div className='text-4xl'>🎀</div>
        <div className='text-3xl font-bold'>Register Here ♡</div>
        <div className='text-sm text-gray-700 '>Create an account for sweet perks & order tracking.</div>
      </div>
      <div className='w-full bg-pink-300 flex flex-row gap-4 rounded-2xl mt-4 '>
        
         <Link href="/client/login" className="w-full"><button className='w-1/2 py-1 px-2 border border-pink-300 rounded-2xl bg-pink-500 text-white text-sm font-bold '>Login</button> </Link> 
         <Link href="/client/register" className="w-full"><button className='w-1/2 py-1 px-2 border border-pink-300 rounded-2xl bg-pink-500 text-white text-sm font-bold '>SignUp</button></Link> 
        
      </div>
      <form className='mt-4 w-full flex flex-col gap-4'>
        <div className='flex flex-col gap-2 w-full'>
          <label className='font-bold'>Full Name</label>
          <input type="text" placeholder="Daisy Darling" className='py-2 px-4 border-2 rounded-2xl border-t-black border-l-black border-b-gray-500 border-r-gray-500 bg-white' />
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <label className='font-bold'>Email</label>
          <input type="email" placeholder="daisydarling@gmail.com" className='py-2 px-4 border-2 rounded-2xl border-t-black border-l-black border-b-gray-500 border-r-gray-500 bg-white' />
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <label className='font-bold'>Password</label>
          <input type="password" placeholder="" className='py-2 px-4 border-2 rounded-2xl border-t-black border-l-black border-b-gray-500 border-r-gray-500 bg-white' />
        </div>


      </form>
      <Link href="/client/login" className="w-full"><div>
        <button className=' p-2 w-full mt-4 bg-pink-600 rounded-2xl text-white font-bold'>Create an account ♡</button>
      </div> </Link> 
    </div>
    </div>
  );
};

export default page;
