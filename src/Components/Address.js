import React, { useState } from "react";
import { useSelector } from 'react-redux';


const AddressForm = () => {
  const items = useSelector((state) => state.addItems); 
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Address:", formData);
    alert("Address saved successfully!");
  };

  const platFormFee = 20;

  const totalMRP = items.reduce((acc, item) => acc + (Number(item.price) || 0) * Math.max(Number(item.qty) || 0, 0), 0);

  const totalDiscount = items.reduce((acc, item) => acc + ((Number(item.price) * Number(item.discount) / 100) || 0) * Math.max(Number(item.   qty) || 0, 0), 0);

  const totalAmount = Math.max(totalMRP, ...items.map(item => Number(item.price) || 0)) - 
    Math.max(totalDiscount, ...items.map(item => (Number(item.price) * Number(item.discount) / 100) || 0)) + 
    platFormFee;

  return (
    <>
    <div className="w-[65%] flex justify-between place-self-center max-sm:w-[90%] max-sm:grid max-sm:grid-cols-1">
      <div className="flex justify-center items-center bg-gray-100">
        <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-4">Add New Address</h2>
          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Mobile Number */}
            <div className="mb-4">
              <label className="block text-gray-700">Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter your mobile number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>

            {/* Address */}
            <div className="mb-4">
              <label className="block text-gray-700">Address</label>
              <textarea
                name="address"
                placeholder="Enter your address"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                rows="3"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            {/* City & State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter city"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">State</label>
                <select
                  name="state"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  value={formData.state}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select State</option>
                  <option>Maharashtra</option>
                  <option>Karnataka</option>
                  <option>Tamil Nadu</option>
                  <option>Delhi</option>
                </select>
              </div>
            </div>

            {/* Pincode */}
            <div className="mb-4 mt-4">
              <label className="block text-gray-700">Pincode</label>
              <input
                type="text"
                name="pincode"
                placeholder="Enter pincode"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                value={formData.pincode}
                onChange={handleChange}
                required
              />
            </div>

            {/* Landmark */}
            <div className="mb-4">
              <label className="block text-gray-700">Landmark (Optional)</label>
              <input
                type="text"
                name="landmark"
                placeholder="E.g. Near mall, school"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                value={formData.landmark}
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#FF527B] text-white py-2 rounded-lg hover:bg-pink-700 transition duration-300"
            >
              Save Address
            </button>
          </form>
        </div>
      </div>

      
      <div className='w-[45%] place-items-center place-content-center max-sm:w-[90%] max-sm:grid max-sm:grid-cols-1'>
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
          </div>
        </div>
    </div>
    </>
  );
};

export default AddressForm;
