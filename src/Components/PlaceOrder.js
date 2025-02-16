import React, { useEffect, useState } from 'react'
import image from '../assets/logo.png';
import secure from '../assets/secure.png';
import { Link } from 'react-router-dom';
import PlaceOrderChild from './PlaceOrderChild';
import { useDispatch, useSelector } from 'react-redux';


export default function PlaceOrder() { 
  const storeItems = useSelector((state) => state.addItems);
  const [items, setItems] = useState(storeItems);
  const [MRP, setMRP] = useState("");
  const [discount, setDiscount] = useState("");
  const [amount, setAmount] = useState("");


  const getItems = items.map((item, index) => {
    return(
      <PlaceOrderChild key={index} item={item} setItems={setItems} items={items}/>
    );    
  });  
  
  const platFormFee = 20;    

  useEffect(() => {    
    const totalMRP = storeItems.reduce((acc, item) => acc + (Number(item.price) || 0) * Math.max(Number(item.qty) || 0, 0), 0);
    
    const totalDiscount = storeItems.reduce((acc, item) => acc + ((Number(item.price) * Number(item.discount) / 100) || 0) * Math.max(Number(item.qty) || 0, 0), 0);
   
    const totalAmount = totalMRP - totalDiscount + platFormFee;
    
    setMRP(totalMRP);
    setDiscount(totalDiscount);
    setAmount(totalAmount);
  }, [storeItems]);



  return (
    <>
      <div className='bg-white h-[80px] flex max-sm:justify-between max-sm:px-5'>
        <div className='w-[15%] flex justify-center items-center'>
          <Link to='/'><img className='h-[60px] justify-self-center' src={image} alt=''/></Link>
        </div>
        <div className='w-[70%] flex justify-center items-center max-sm:hidden max-sm:flex-nowrap text-[11px]'>
          <div className='p-2 text-[#535766] font-semibold max-sm:text-[8px] max-sm:flex-nowrap'>B A G</div>
          <div className='max-sm:text-[3px] max-sm:flex-nowrap'>-------------</div>
          <div className='p-2 text-[#535766] font-semibold max-sm:text-[8px] max-sm:flex-nowrap'>A D D R E S S</div>
          <div className='max-sm:text-[3px] max-sm:flex-nowrap'>-------------</div>
          <div className='p-2 text-[#535766] font-semibold max-sm:text-[8px] max-sm:flex-nowrap'>P A Y M E N T</div>
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

      
      <div className='flex my-10 max-sm:grid max-sm:grid-cols-1'>
        <div className='w-[10%]'></div>


        <div className='w-[48%] h-[200px] max-sm:w-[100%] '>
          {getItems?.length > 0 ? (          
            getItems          
          ): (
            <div className='w-[48%] flex place-self-center font-semibold h-[200px] items-center text-[#535766] bg-white max-sm:w-[100%] max-sm:justify-center'>
              Cart's empty! You have not added any items yet.
            </div>
          )}
        </div>


        <div className='w-[2%]'></div>


        <div className='w-[30%] place-items-center place-content-center max-sm:w-[100%]'>
          <div className='size-[90%]'>
            <div className='text-[14px] text-[#535766] font-bold mb-2'>PRICE DETAILS</div>
            <div className='flex justify-between text-[14px] py-1'>
              <div className='text-[#535766]'>Total MRP</div>
              <div>&#8377; {MRP}</div>
            </div>
            <div className='flex justify-between text-[14px] py-1'>
              <div className='text-[#535766]'>Discount on MRP</div>
              <div className='text-[#535766]'>- &#8377; {Math.floor(discount)}</div>
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
              <div className='text-[#535766] font-bold'>&#8377; {Math.floor(amount)}</div>
            </div>
            <Link to='/address-details'>
              <button className='bg-[#FF527B] font-bold text-white w-[100%] h-[45px] my-8 rounded-md hover:bg-pink-700 transition duration-300'>CHEKCOUT</button>  
            </Link>        
          </div>
        </div>
      </div>           
    </>
  )
}


