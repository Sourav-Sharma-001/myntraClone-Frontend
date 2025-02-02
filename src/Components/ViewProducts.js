import axios from 'axios';
import ViewProductsChild from './ViewProductsChild';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import BottomPage from './BottomPage';


export default function ViewProducts() {
  const [viPro, setViPro] = useState([]);

  const recieveProducts = () => {    
    axios.get('http://localhost:4001/view')
    .then((res) => res.data)
    .then((finalRes) => {      
      setViPro(finalRes);
    }).catch(error => console.error('Error:', error));
  }

  useEffect(() => {
    recieveProducts();
  }, []);

  const pView = viPro.map((product, index) => {
    return(
      <ViewProductsChild key={index} viewData={product}/>
    );
  });


  return (
    <>
      <Navbar/>      
      <div className='mt-[100px]'>
        <div className='grid grid-cols-6 gap-6 py-4'>
          {pView}
        </div>         
      </div>
      <BottomPage/>       
    </>
  )
}

