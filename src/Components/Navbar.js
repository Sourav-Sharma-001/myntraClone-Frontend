import React from 'react';
import myntraLogo from '../assets/logo.png';
import { Link } from "react-router";


export default function Navbar() { 
  return (
   <nav className='fixed w-full z-50 top-0 flex h-[80px] shadow-md bg-white'>      
      <div className='w-[10%] max-sm:w-[8%]'>
        <Link to='/'><img className='h-[60px] justify-self-center mt-[10px] ml-[30px] cursor-pointer max-sm:h-[40px] max-sm:mt-5' src={myntraLogo} alt=''/></Link>
      </div>      
      <div className='w-[40%] flex flex-row justify-center items-center max-sm:flex max-sm:flex-wrap max-sm:w-[30%] max-sm:ml-5'>
        <div className='px-[15px] content-center h-[100%] cursor-pointer hover:border-b-4 py-4 hover:border-b-blue-500 max-sm:px-[5px]   max-sm:h-[20%]'>
          <Link to='/view-products'><div className='font-bold text-sm max-sm:text-[9px] max-sm:m-0' >MEN</div></Link>
        </div>
        <div className='px-[15px] content-center h-[100%] cursor-pointer hover:border-b-4 py-4 hover:border-b-red-500 max-sm:px-[5px] max-sm:h-[20%]'>
        <Link to='/view-products'><div className='font-bold text-sm max-sm:text-[9px] max-sm:m-0' >WOMEN</div></Link>
        </div>
        <div className='px-[15px] content-center h-[100%] cursor-pointer hover:border-b-4 py-4 hover:border-b-purple-500 max-sm:px-[5px] max-sm:h-[20%]'>
        <Link to='/view-products'><div className='font-bold text-sm max-sm:text-[9px] max-sm:m-0' >KIDS</div></Link>
        </div>
        <div className='px-[15px] content-center h-[100%] cursor-pointer hover:border-b-4 py-4 hover:border-b-pink-500 max-sm:px-[5px] max-sm:h-[20%]'>
        <Link to='/view-products'><div className='font-bold text-sm max-sm:text-[9px] max-sm:m-0' >HOME & LIVING</div></Link>
        </div>
        <div className='px-[15px] content-center h-[100%] cursor-pointer hover:border-b-4 py-4 hover:border-b-green-500 max-sm:px-[5px] max-sm:h-[20%]'>
        <Link to='/view-products'><div className='font-bold text-sm max-sm:text-[9px] max-sm:m-0' >BEAUTY</div></Link>
        </div>
        <div className='px-[15px] content-center h-[100%] cursor-pointer hover:border-b-4 py-4 hover:border-b-yellow-500 max-sm:px-[5px] max-sm:h-[20%]'>
        <Link to='/view-products'><div className='font-bold text-sm max-sm:text-[9px] max-sm:m-0' >STUDIO</div></Link>
        </div>
      </div>
      <div className='w-[35%] flex justify-center items-center relative'>
        <div className='absolute left-[10px]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>
        <input className='h-[50%] w-[100%] bg-[#F5F5F6] rounded-md pl-[40px] max-sm:text-[10px] focus:bg-[white] focus:outline-none focus:border-[2px]' type='text' placeholder='Search for products, brands and many more'/>
      </div>
      <div className='w-[3%]'></div>
      <div className='w-[10%] flex flex-row items-center'>
        <div className='flex-1'>
          <Link to='/login'>
            <div className='flex justify-self-center cursor-pointer bg-transparent'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg> 
            </div>                   
            <p className='flex justify-self-center text-[12px] font-bold max-sm:text-[10px]'>Profile</p>
          </Link>
        </div>        
        <div className='flex-1 flex justify-center'>
          <Link to='/place-order'> 
            <div className='flex flex-row place-items-center'>           
              <div className='flex flex-col justify-self-center fixed'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>                        
                <p className='flex justify-self-center text-[12px] font-bold max-sm:text-[10px]'>Bag</p>
              </div>                                         
            </div>                        
          </Link>                   
        </div>        
      </div>      
   </nav>
  );
}




// import { useDispatch } from "react-redux";
// import { logout } from "../redux/authSlice";

// const Navbar = () => {
//     const dispatch = useDispatch();

//     const handleLogout = () => {
//         dispatch(logout());
//     };

//     return (
//         <nav>
//             <button onClick={handleLogout}>Logout</button>
//         </nav>
//     );
// };

// export default Navbar;
