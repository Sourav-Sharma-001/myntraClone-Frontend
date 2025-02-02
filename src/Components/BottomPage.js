import React from 'react'
import { Link } from 'react-router-dom'
import offer from '../assets/offers.webp'
import gPlay from '../assets/google play.png'
import apple from '../assets/apple store.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import youTube from '../assets/youTube.png'
import instagram from '../assets/instagram.png'
import original from '../assets/original.png'
import retBack from '../assets/return.png'
import { PiCopyrightThin } from "react-icons/pi";



export default function bottomPage() {
  return (
    <>
      <div className='w-[80%] h-[250px] flex place-self-center place-content-center place-items-center mt-10'>
        <Link to='/view-products'>
          <img src={offer}/>
        </Link>
      </div>


      <div className='w-[80%] place-self-center mt-9 flex justify-center'>
        <div className='w-[15%] flex flex-col'>
          <div className='text-[#535766] font-bold text-[13px] my-5'>ONLINE SHOPPING</div>
          <div className='text-[#535766] text-[14px] my-0.5'>Men</div>
          <div className='text-[#535766] text-[14px] my-0.5'>Women</div>
          <div className='text-[#535766] text-[14px] my-0.5'>Kids</div>
          <div className='text-[#535766] text-[14px] my-0.5'>Home & Living</div>
          <div className='text-[#535766] text-[14px] my-0.5'>Beauty</div>
          <div className='text-[#535766] text-[14px] my-0.5'>Gift Cards</div>
          <div className='text-[#535766] text-[14px] my-0.5'>Myntra Insider</div>
          <div className='text-[#535766] font-bold text-[13px] my-5'>USEFUL LINKS</div>
          <div className='text-[#535766] text-[14px] my-0.5'>Blog</div>
          <div className='text-[#535766] text-[14px] my-0.5'>Career</div>
          <div className='text-[#535766] text-[14px] my-0.5'>Site Map</div>
          <div className='text-[#535766] text-[14px] my-0.5'>Corporate Information</div>
          <div className='text-[#535766] text-[14px] my-0.5'>Whitehat</div>
          <div className='text-[#535766] text-[14px] my-0.5'>cleartip</div>          
        </div>
        <div className='w-[15%] flex flex-col'>
          <div className='text-[#535766] font-bold text-[13px] my-5 v'>CUSTOMER POLICIES</div>
          <div className='text-[#535766] text-[14px] my-0.5'>Contact Us</div>
          <div className='text-[#535766] text-[14px] my-0.5'>FAQ</div>
          <div className='text-[#535766] text-[14px] my-0.5'>T&C</div>
          <div className='text-[#535766] text-[14px] my-0.5'>Terms of Use</div>
          <div className='text-[#535766] text-[14px] my-0.5'>Track Orders</div>
          <div className='text-[#535766] text-[14px] my-0.5'>Gift Cards</div>
          <div className='text-[#535766] text-[14px] my-0.5'>Shipping</div>          
          <div className='text-[#535766] text-[14px] my-0.5'>Cancellation</div>
          <div className='text-[#535766] text-[14px] my-0.5'>Returns</div>
          <div className='text-[#535766] text-[14px] my-0.5'>Privacy Policy</div>
          <div className='text-[#535766] text-[14px] my-0.5'>Grievance redressal</div>                   
        </div>
        <div className='w-[25%] flex flex-col'>
          <div className='font-bold text-[13px] my-5 text-[#535766]'>EXPERIENCE MYNTRA APP ON MOBILE</div>
            <div className='flex'>
              <img className='w-[45%] mr-2' src={gPlay}/>
              <img className='w-[45%]' src={apple}/>
            </div>
            <div className='font-bold text-[13px] my-5 text-[#535766]'>KEEP IN TOUCH</div>  
            <div className='flex'>
              <img className='size-[25px] mr-3' src={facebook}/>
              <img className='size-[25px] mr-3' src={twitter}/>
              <img className='size-[25px] mr-3' src={youTube}/>
              <img className='size-[25px]' src={instagram}/>
            </div>              
        </div>
        <div className='w-[25%]'>
          <div className='flex my-5'>
            <img className='size-[50px]' src={original}/>
            <div className='text-[#535766] text-[14px]'><strong className='mr-1'>100% ORIGINAL</strong>gurantee for all products at myntra.com</div>
          </div>
          <div className='flex my-5'>
            <img className='size-[50px]' src={retBack}/>
            <div className='text-[#535766] text-[14px]'><strong className='mr-1'>Return within 14 days</strong>gurantee for all products at myntra.com</div>
          </div>
        </div>
      </div>


      <div className='w-[65%] place-self-center'>
        <div className='font-bold text-[13px] my-7 text-[#535766]'>POPULAR SEARCHES</div>
        <div className='text-[#535766] text-[14px]'>
        Makeup | Dresses | For | Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers | For | Men | Handbags | Ladies | Watches | Bags | Sport | Shoes | Reebok | Shoes | Puma | Shoes | Boxers | Wallets | Tops | Earrings | Fastrack | Watches | Kurtis | Nike | Smart | Watches | Titan | Watches | Designer | Blouse | Gowns | Rings | Cricket | Shoes | Forever | 21 | Eye | Makeup | Photo | Frames | Punjabi | Suits | Bikini | Myntra | Fashion | Show | Lipstick | Saree | Watches | Dresses | Lehenga | Nike | Shoes | Goggles | Bras | Suit | Chinos | Shoes | Adidas | Shoes | Woodland | Shoes | Jewellery | Designers | Sarees |
        </div>
        <div className='flex justify-between my-7'>
          <div className='text-[#535766] text-[14px]'>In case of any concern,<strong className='ml-1 text-[#786CD0]'>Contact Us</strong></div>
          <div className='text-[#535766] text-[14px] flex items-center'> <PiCopyrightThin /> 2025 www.myntra.com. All rights reserved.</div>
          <div className='text-[#535766] text-[14px]'>A Flipkart company</div>
        </div>
      </div>


      <hr className='my-7 w-[65%] place-self-center'/>
      

      <div className='w-[65%] place-self-center mb-16'>
        <div className='font-bold text-[13px] my-5 text-[#535766]'>Registered Office Address</div>
        <div className='flex justify-between'>
          <div>
            <div className='text-[#535766] text-[14px] my-0.5'>Buildings Alyssa,</div>
            <div className='text-[#535766] text-[14px] my-0.5'>Begonia and Clover situated in Embassy Tech Village,</div>          
            <div className='text-[#535766] text-[14px] my-0.5'>Outer Ring Road,</div>
            <div className='text-[#535766] text-[14px] my-0.5'>Devarabeesanahalli Village,</div>
            <div className='text-[#535766] text-[14px] my-0.5'>Varthur Hobli,</div>
            <div className='text-[#535766] text-[14px] my-0.5'>Bengaluru – 560103, India</div>
          </div>
          <div className='mt-20 pt-2'>
            <div className='text-[#535766] text-[14px] my-0.5'>CIN: U72300KA2007PTC041799</div>
            <div className='text-[#535766] text-[14px]'>Telephone:<strong className='ml-1 text-[#786CD0]'>+91-80-61561999</strong></div>
          </div>
        </div>
      </div>
    </>
  )
}
