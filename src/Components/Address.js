import React from 'react'

export default function Address() {
  return (
    <div className='h-[600px] place-items-center place-content-center'>
      <div className='bg-white w-[40%] h-[70%] place-items-center place-content-center'>
        <div className='bg-yellow-200 w-[65%] h-[90%] flex flex-col place-content-center border-[1px]'>
          <input className='py-2 border-[1px] px-3 my-4 mx-2 rounded-md' type='name' placeholder='Name'/>
          <input className='py-2 border-[1px] px-3 my-4 mx-2 rounded-md' type='address' placeholder='Address'/>
          <input className='py-2 border-[1px] px-3 my-4 mx-2 rounded-md' type='tel' pattern="[0-9]{10}" required maxLength="10" name='mobile' placeholder='Mobile no.'/>
          <button className='bg-[#FF527B] font-bold text-white w-[90%] h-[45px] my-8 rounded-md place-self-center'>PLACE ORDER</button> 
        </div>
      </div>
    </div>
  )
}
