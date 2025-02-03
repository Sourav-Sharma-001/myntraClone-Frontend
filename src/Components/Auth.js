import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar';

export default function Auth() {
  
  const [isLogIn, setLogIn] = useState(true);
  return (
    <>
      <Navbar/>   
      <div className='flex justify-center mt-[150px]'>
        <div className='w-[25%] border-[2px] rounded-lg px-2 flex-shrink-0 max-sm:w-[60%] max-md:w-[45%]'>
          <div className='grid grid-cols-2 py-[5px]'>
            <button className={isLogIn? "bg-pink-600 text-white py-[5px] rounded font-semibold":"bg-slate-100 py-[5px] rounded font-semibold"} onClick={()=>setLogIn(true)}>Log in</button>
            <button className={!isLogIn? "bg-pink-600 text-white py-[5px] rounded font-semibold": "bg-slate-100 py-[5px] rounded font-semibold"} onClick={()=>setLogIn(false)}>Sign up</button>
          </div>
          {isLogIn ? <>
            <div className='text-4xl font-semibold mt-[20px] ml-3 flex'>Login</div>
            <div className='flex flex-col mt-[15px] mx-3'>
              <input className='mb-2 py-2 pl-2 border-[1px] focus:border-black-[3px] rounded-md' type='email' placeholder='Email Address'/>
              <input className='py-2 pl-2 border-[1px] focus:border-black-[3px] rounded-md' type='password' placeholder='Password'/>
              <a className='text-pink-600 flex justify-end my-2 font-semibold' href='#'>Forgot Password</a>
              <button className='bg-pink-600 text-white py-2 rounded-md'>Login</button>
              <p className='flex justify-center my-3'>Not a member? <a className='text-pink-600 mx-1 font-semibold' href='#' onClick={()=>setLogIn(false)}>Sign up now</a></p>            
            </div>          
          </> : <>
          <div className='text-4xl font-semibold mt-[20px] ml-3'>Sign up</div>
            <div className='flex flex-col mt-[15px] mx-3'>
              <input className='mb-2 py-2 pl-2 border-[1px] focus:border-black-[3px] rounded-md' type='email' placeholder='Email Address'/>
              <input className='py-2 pl-2 border-[1px] focus:border-black-[3px] rounded-md' type='password' placeholder='Password'/>
              <input className='py-2 pl-2 my-2 border-[1px] focus:border-black-[3px] rounded-md' type='password' placeholder='Confirm Password'/>
              <a className='text-pink-600 flex justify-end mb-2 font-semibold' href='#'>Forgot Password</a>
              <button className='bg-pink-600 text-white py-2 rounded-md font-semibold'>Signup</button>
              <p className='flex justify-center my-3'>Not a member? <a className='text-pink-600 mx-1 font-semibold' href='#' onClick={()=>setLogIn(false)}>Sign up now</a></p>            
            </div>
          </>}
        </div>
      </div>
    </>
  )
}
