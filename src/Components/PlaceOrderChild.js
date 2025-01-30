import React from 'react'
import campus from '../assets/campus.webp'
import { useSelector, useDispatch } from 'react-redux'



export default function PlaceOrderChild(bagProducts) {

  const items = useSelector((state) => state.addItems);
  console.log(items);
  const dispatch = useDispatch()
  
  return (
    <>
      <div className='w-[48%] h-[200px] place-content-center border-[#cdcfd7] border-[1px] bg-white'>
        <div className='w-[95%] h-[90%] justify-self-center flex'>
          <div className='w-[23%]'>
            <img className='h-[100%]' src={campus} alt=''/>
          </div>
          <div>
            <div className='font-bold text-[14px] text-[#535766] py-1'>enter name</div>
            <div className='text-[14px]'>enter title</div>
            <div className='text-[12px] text-[#535766]'>Sold by: Flashstar Commerce</div>
            <div className='flex py-3 items-center'>
              <div className='px-2'>
                <label className='text-sm font-bold text-[#535766] bg-[#F5F5F6] px-3 py-1' htmlFor="size">Size:</label>
                <select className='text-[14px] font-bold text-[#535766] bg-[#F5F5F6] px-3 py-1' name="size" id="sizes">
                  <option value="38">38</option>
                  <option value="40">40</option>
                  <option value="42">42</option>
                  <option value="44">44</option>
                </select>
              </div>
              <div className='flex px-2 items-center'>
                <label className='text-sm font-bold text-[#535766] bg-[#F5F5F6] px-3 py-1' htmlFor="size">Qty:</label>
                <div className='text-[14px] font-bold text-green-600 bg-[#F5F5F6] mr-2 px-3 py-1'>2</div>                
                <div className='flex'>
                  <button className='font-bold  ml-2 text-[#535766] px-3 py-1 bg-[#F5F5F6] border-[2px]'>-</button>
                  <button className='font-bold text-[#535766] px-3 py-1 bg-[#F5F5F6] border-[2px]'>+</button>
                </div>
              </div>
            </div>
            <div className='flex py-1'>
              <div className='text-[14px] font-bold px-2 text-[#535766]'>&#8377; 599</div>
              <div className='text-[14px] text-[#F16565]'>63% OFF</div>
            </div>
            <div className='flex items-center'>
              <div className='px-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
              <div className='text-sm text-[#535766]'><strong>14 days</strong> return availbale</div>
            </div>
          </div>            
        </div>
      </div>
    </>
  )
}
