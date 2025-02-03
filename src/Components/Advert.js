import React from 'react'
import advert1 from '../assets/Adv1.png'
import advert2 from '../assets/Adv2.png'

export default function Advert() {
  return (
    <>
      <div className='h-[500px] flex justify-center items-center mt-[60px] max-sm:h-[250px]'>
        <img className='size-[90%] cursor-pointer' src={advert1} alt=''/>
      </div> 
      <h1 className='mb-4 text-4xl font-bold max-sm:text-3xl text-gray-900 md:text-5xl lg:text-5xl dark:text-[#98D0C2] flex justify-center font-Roboto'>Coupons Corner</h1>           
      <div className='h-[600px] flex justify-center items-center max-sm:h-[250px]'>
        <img className='size-[90%] cursor-pointer ' src={advert2} alt=''/>
      </div>      
    </>
  )
}
