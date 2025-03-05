import axios from 'axios';
import ViewProductsChild from './ViewProductsChild';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import BottomPage from './BottomPage';
import loading from '../assets/loading.gif';
import { useSelector } from 'react-redux'; // ✅ Import useSelector to get token from Redux

export default function ViewProducts() {
  const [viPro, setViPro] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const apiUrl = process.env.REACT_APP_API_URL;

  const token = useSelector((state) => state.auth.token); // ✅ Get token from Redux

  const recieveProducts = () => {    
    axios.get(`${apiUrl}/view`, {
      headers: {
        Authorization: `Bearer ${token}`, // ✅ Use the token from Redux
      },
    })
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
  }, []); // ✅ Now correctly placed inside the function

  const pView = viPro.map((product, index) => (
    <ViewProductsChild key={index} viewData={product} />
  ));

  return (
    <>
      <Navbar />
      <div className='mt-[100px]'>
        {isLoading ? (
          <div className='flex justify-center'>
            <img src={loading} alt="Loading..." />
          </div>
        ) : viPro.length > 0 ? ( // ✅ Fixed ternary operator syntax
          <div className='grid grid-cols-6 gap-6 py-4 max-sm:grid-cols-2'>
            {pView}
          </div>
        ) : (
          <p className="text-center text-gray-500">No products available.</p>
        )}
      </div>
      <BottomPage />
    </>
  );
}
