import React from 'react'
import image from '../assets/logo.png';
import secure from '../assets/secure.png';
import { Link } from 'react-router-dom';
import PlaceOrderChild from './PlaceOrderChild';
import { useSelector } from 'react-redux';


export default function PlaceOrder() {   

  const items = useSelector((state) => state.addItems);
  console.log(items);

  const getItems = items.map((item, index) => {
    return(
      <PlaceOrderChild key={index} item={item}/>
    );    
  }); 
  

  return (
    <>
      <div className='bg-white h-[80px] flex'>
        <div className='w-[15%] flex justify-center items-center'>
          <img className='h-[60px] justify-self-center' src={image} alt=''/>
        </div>
        <div className='w-[70%] flex justify-center items-center text-[11px]'>
          <div className='p-2 text-[#535766] font-semibold'>B A G</div>-------------<div className='p-2 text-[#535766] font-semibold'>A D D R E S S</div>-------------<div className='p-2 text-[#535766] font-semibold'>P A Y M E N T</div>
        </div>
        <div className='flex items-center'>
          <div>
            <img className='h-7' src={secure} alt=''/>
          </div>
          <div className=' flex text-[11px]'>
            <div className='px-1 text-[#535766] font-semibold'>1 0 0 %</div>
            <div className='px-1 text-[#535766] font-semibold'>S E C U R E</div>
          </div>
        </div>
      </div>


      <div className='flex my-10'>
        <div className='w-[10%]'></div>        
        {getItems}


        <div className='w-[2%]'></div>


        <div className='w-[30%] place-items-center place-content-center'>
          <div className='size-[90%]'>
            <div className='text-[14px] text-[#535766] font-bold mb-2'>PRICE DETAILS (0 Item)</div>
            <div className='flex justify-between text-[14px] py-1'>
              <div className='text-[#535766]'>Total MRP</div>
              <div>&#8377; 1999</div>
            </div>
            <div className='flex justify-between text-[14px] py-1'>
              <div className='text-[#535766]'>Discount on MRP</div>
              <div className='text-[#535766]'>- &#8377; 999</div>
            </div>
            <div className='flex justify-between text-[14px] py-1'>
              <div className='text-[#535766]'>Coupon Discount</div>
              <div className='text-[#F16565]'>Apply Coupon</div>
            </div>
            <div className='flex justify-between text-[14px] py-1'>
              <div className='text-[#535766]'>Platform Fee <strong className='text-[#F16565] font-bold px-1'>Know More</strong></div>
              <div className='text-[#535766]'>&#8377; 20</div>
            </div>
            <div className='py-1'>
              <div className='flex justify-between text-[14px]'>
                <div className='text-[#535766]'>Platform Fee <strong className='text-[#F16565] font-bold px-1'>Know More</strong></div>
                <div className='text-[#5CA695] text-[14px]'>FREE</div>                
              </div>
              <div className='text-[#535766] text-[12px]'>Free Shipping for you</div>
            </div>
            <hr className='my-2'/>
            <div className='flex justify-between text-[14px] py-1'>
              <div className='text-[#535766] font-bold'>Total Amount</div>
              <div className='text-[#535766] font-bold'>&#8377; 1000</div>
            </div>
            <Link to='/address-details'>
              <button className='bg-[#FF527B] font-bold text-white w-[100%] h-[45px] my-8 rounded-md'>PLACE ORDER</button>  
            </Link>        
          </div>
        </div>
      </div>
    </>
  )
}


