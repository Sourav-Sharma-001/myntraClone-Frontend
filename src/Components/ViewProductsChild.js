import React from 'react'
import { Link } from 'react-router-dom';


export default function ViewProductsChild({viewData}) {

  const base64String = `data:image/jpeg;base64,${viewData.thumbnail}`;
  
  return (
    <>
    <Link to={`/view-products/${viewData._id}`}>
      <div className='h-[350px] '>
        <div className='h-[80%] w-[95%] place-self-center'>
          <img className='size-[100%]' src={base64String} alt='Base64 representation'/>
        </div>
        <div className='font-bold truncate w-[70%] py-0.5 pl-2'>{viewData.name}</div>
        <div className=' w-[70%] truncate text-[#7D808B] text-sm pb-1 pl-2'>{viewData.title}</div>
        <div className='flex '>
          <div className='text-xs font-bold pl-2'>Rs. {viewData.price}</div>
          <div className='text-xs text-red-400 pl-2'>({viewData.discount}% OFF)</div>
        </div>        
      </div>
    </Link>
    </>
  )
}
