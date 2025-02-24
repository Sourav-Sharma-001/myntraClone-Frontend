import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar';
import Products from './Products';
import Advert from './Advert';
import { Link } from 'react-router-dom';
import BottomPage from './BottomPage';


export default function Home() {
  const [finalProducts, setFinalProduct] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;
  
  const getProduct = () => {
    axios.get(`${apiUrl}/home`)
    .then((res) => res.data)
    .then((finalRes) => {
      setFinalProduct(finalRes);
    })
  }

  useEffect(() => {
    getProduct();    
  }, []);

  let pItems = finalProducts.map((products, index) => {
    return(
      <Products key={index} pdata = {products}/>
    );    
  });  
  
  return (
    <>
      <Navbar/>
      <Link to='/view-products'><Advert/></Link>
      <h1 className='mb-4 text-4xl font-bold text-gray-900 md:text-5xl lg:text-5xl dark:text-[#413A36] flex justify-center font-Roboto max-sm:text-3xl'>Shop by Category</h1>      
      <div className='grid grid-cols-6 gap-1 size-[85%] place-self-centersize-[80%] place-self-center max-sm:grid max-sm:grid-cols-1'>
          {pItems}
      </div>      
      <BottomPage/>
    </>
  )
}
