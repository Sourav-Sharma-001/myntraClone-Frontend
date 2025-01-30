import React from 'react'
import { Link } from 'react-router-dom';

export default function Products({pdata}) {
  
  const base64String = `data:image/jpeg;base64,${pdata.image}`;
  
  return (
    <>
    <Link to='/view-products'>      
        <div className='h-[100%]'>          
            <img src={base64String} alt='Base64 representation'/>            
        </div>      
    </Link>
    </>
  )
}
