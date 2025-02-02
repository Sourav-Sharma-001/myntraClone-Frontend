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
  
  const platFormFee = 20;

// Find the lowest item MRP and discount
const minItemMRP = Math.min(...items.map(item => Number(item.price) || 0));
const minItemDiscount = Math.min(
    ...items.map(item => (Number(item.price) * Number(item.discount) / 100) || 0)
);

// Ensure `qty` is at least 0 to prevent negative totals
const totalMRP = items.reduce((acc, item) => {
    const price = Number(item.price) || 0;
    const qty = Math.max(Number(item.qty) || 0, 0); // Prevent negative qty
    return acc + price * qty;
}, 0);

// Ensure `totalDiscount` does not go below the lowest possible discount
const totalDiscount = items.reduce((acc, item) => {
    const price = Number(item.price) || 0;
    const discount = Number(item.discount) || 0;
    const qty = Math.max(Number(item.qty) || 0, 0);
    return acc + (price * discount / 100) * qty;
}, 0);

// Prevent totalMRP and totalDiscount from dropping below at least one item
const adjustedTotalMRP = Math.max(totalMRP, minItemMRP);
const adjustedTotalDiscount = Math.max(totalDiscount, minItemDiscount);

// Final total amount calculation
const totalAmount = adjustedTotalMRP - adjustedTotalDiscount + platFormFee;





  return (
    <>
      <div className='bg-white h-[80px] flex'>
        <div className='w-[15%] flex justify-center items-center'>
          <Link to='/'><img className='h-[60px] justify-self-center' src={image} alt=''/></Link>
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


        <div className='w-[48%] h-[200px]'>
          {getItems?.length > 0 ? (          
            getItems          
          ): (
            <div className='w-[48%] flex place-self-center font-semibold h-[200px] items-center text-[#535766] bg-white'>
              Cart's empty! You have not added any items yet.
            </div>
          )}
        </div>


        <div className='w-[2%]'></div>


        <div className='w-[30%] place-items-center place-content-center'>
          <div className='size-[90%]'>
            <div className='text-[14px] text-[#535766] font-bold mb-2'>PRICE DETAILS (0 Item)</div>
            <div className='flex justify-between text-[14px] py-1'>
              <div className='text-[#535766]'>Total MRP</div>
              <div>&#8377; {totalMRP}</div>
            </div>
            <div className='flex justify-between text-[14px] py-1'>
              <div className='text-[#535766]'>Discount on MRP</div>
              <div className='text-[#535766]'>- &#8377; {Math.floor(totalDiscount)}</div>
            </div>
            <div className='flex justify-between text-[14px] py-1'>
              <div className='text-[#535766]'>Coupon Discount</div>
              <div className='text-[#F16565]'>Apply Coupon</div>
            </div>
            <div className='flex justify-between text-[14px] py-1'>
              <div className='text-[#535766]'>Platform Fee <strong className='text-[#F16565] font-bold px-1'>Know More</strong></div>
              <div className='text-[#535766]'>&#8377; {platFormFee}</div>
            </div>
            <div className='py-1'>
              <div className='flex justify-between text-[14px]'>
                <div className='text-[#535766]'>Shipping Fee <strong className='text-[#F16565] font-bold px-1'>Know More</strong></div>
                <div className='text-[#5CA695] text-[14px]'>FREE</div>                
              </div>
              <div className='text-[#535766] text-[12px]'>Free Shipping for you</div>
            </div>
            <hr className='my-2'/>
            <div className='flex justify-between text-[14px] py-1'>
              <div className='text-[#535766] font-bold'>Total Amount</div>
              <div className='text-[#535766] font-bold'>&#8377; {Math.floor(totalAmount)}</div>
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


