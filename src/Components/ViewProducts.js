import axios from 'axios';
import ViewProductsChild from './ViewProductsChild';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import BottomPage from './BottomPage';
import loading from '../assets/loading.gif';

export default function ViewProducts() {
  const [viPro, setViPro] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const apiUrl = process.env.REACT_APP_API_URL;

  const recieveProducts = () => {    
    axios.get(`http://${apiUrl}/view`)
      .then((res) => res.data)
      .then((finalRes) => {      
        setViPro(finalRes);
        setIsLoading(false); 
      })
      .catch(error => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    recieveProducts();
  }, []);

  
  const pView = viPro.map((product, index) => {
    return <ViewProductsChild key={index} viewData={product} />;
  });

  return (
    <>
      <Navbar />
      <div className='mt-[100px]'>
        {isLoading ? (
          <div className='flex justify-center'>
            <img src={loading} alt="Loading..." />
          </div>
        ) : viPro.length > 0 && (
          <div className='grid grid-cols-6 gap-6 py-4 max-sm:grid-cols-2'>
            {pView}
          </div>
        )}
      </div>
      <BottomPage />
    </>
  );
}
