import React from 'react'

export default function AddToBagChild({bPro}) {

   const base64String = `data:image/jpeg;base64,${bPro}`;
   
  return (
    <>
      <img className='w-[98%] cursor-pointer' src={base64String} alt='Base64 representation'/>
    </>
  )
}
