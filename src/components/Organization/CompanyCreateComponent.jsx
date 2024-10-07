import React, { useState } from 'react';
import employee_img from "../../assetsechttech/utility-images/employee_img.png"

const CompanyCreateComponent = () => {


  return (
    <div className="form-container shadow radius">
      <div className="top-hdr flex justify-between">
        <h1 className='pb-1 font-bold text-xl'>Add New Company</h1>
      </div>
      
    

      <form className='mt-10'>
        
          <div className="form-step">
            <div className="form-labels">
                <div className="row first-row flex items-center">
                  <div className="first">
                    <label htmlFor="" className='block text-gray-700 font-bold mb-2'>Company Name</label>
                    <input className='border border-gray-300 text-gray-500 p-2 h-9 rounded w-full' type="text" placeholder='Company Name' />
                  </div>

                  <div className="first">
                    <label for="type" className='block text-gray-700 font-bold mb-2'>Company Type</label>
                      <select name="type" id="type" className='border border-gray-300 text-gray-500 p-2 h-9 rounded w-full'>
                        <option value="volvo">Private Company</option>
                        <option value="saab">Government Company</option>
                        <option value="opel">Other</option>
                      </select>
                  </div>

                  <div className="first">
                    <label htmlFor="" className='block text-gray-700 font-bold mb-2'>Legal/Tranding Name</label>
                    <input className='border border-gray-300 text-gray-500 p-2 h-9 rounded w-full' type="text" placeholder='Legal/Tranding Name' />
                  </div>

                  <div className="first">
                    <label htmlFor="" className='block text-gray-700 font-bold mb-2'>Registration Number</label>
                    <input className='border border-gray-300 text-gray-500 p-2 h-9 rounded w-full' type="text" placeholder='Registration Number' />
                  </div>
                  <div className="first">
                    <label htmlFor="" className='block text-gray-700 font-bold mb-2'>Contact Number</label>
                    <input className='border border-gray-300 text-gray-500 p-2 h-9 rounded w-full' type="text" placeholder='Contact Number' />
                  </div>
                 
                </div>

                <div className="row flex second-row items-center mt-5">
                  <div className="first">
                    <label htmlFor="" className='block text-gray-700 font-bold mb-2'>Email</label>
                    <input className='border border-gray-300 text-gray-500 p-2 h-9 rounded w-full' type="text" placeholder='Email' />
                  </div>

                  <div className="first">
                    <label htmlFor="" className='block text-gray-700 font-bold mb-2'>Website</label>
                    <input className='border border-gray-300 text-gray-500 p-2 h-9 rounded w-full' type="text" placeholder='Website' />
                  </div>

                  <div className="first">
                    <label htmlFor="" className='block text-gray-700 font-bold mb-2'>Government Tax Number/EIN</label>
                    <input className='border border-gray-300 text-gray-500 p-2 h-9 rounded w-full' type="text" placeholder='Registration Number' />
                  </div>

                  <div className="first flex items-end">
                    <div className="address-with-label">
                        <label htmlFor="" className='block text-gray-700 font-bold mb-2'>Address</label>
                        <input className='border border-gray-300 text-gray-500 p-2 h-9 rounded w-full' type="text" placeholder='Address Line 1' />
                    </div>
                  </div>
                  <div className="first"><input className='border border-gray-300 text-gray-500 p-2 h-9 rounded w-full' type="text" placeholder='Address Line 2' /></div>
                </div>

                <div className="row flex third-row items-center mt-10">
                  <div className="first">
                    <input className='border border-gray-300 text-gray-500 p-2 h-9 rounded w-full' type="text" placeholder='City' />
                  </div>
                  <div className="first">
                    <input className='border border-gray-300 text-gray-500 p-2 h-9 rounded w-full' type="text" placeholder='State/Province' />
                  </div>
                  <div className="first">
                    <input className='border border-gray-300 text-gray-500 p-2 h-9 rounded w-full' type="text" placeholder='Zip Code/Postal Code' />
                  </div>
                  <div className="first">
                    
                      <select name="type" id="type" className='border border-gray-300 text-gray-500 p-2 h-9 rounded w-full'>
                        <option value="volvo">Countary</option>
                        <option value="saab">India</option>
                        <option value="opel">Pakistan</option>
                      </select>
                  </div>
                </div>

            </div>
            <div className="button button-bottom mt-10 flex justify-between">
             <div className="upload-sec">
              <div className="logo-uploaded"><img src={employee_img} alt="" /></div>
              <button className='main-bg-color next-btn' type="button">Upload</button>
              <button className='delete next-btn' type="button">Delete</button>
             </div>
                 
             <div className='add-reset-btns flex items-center justify-end pt-4'>
              <button
                  className="apply-leave-btn mx-1 main-bg-color text-white px-2 py-2 rounded w-full md:w-auto "
                >
                  Save
                </button>
                <button
                  className="apply-leave-btn bg-gray-400 text-white px-2 py-2 rounded w-full md:w-auto"
                >
                  Reset
                </button>

              </div>
 
             </div>
            
          </div>
       

        
           
      </form>
    </div>
  );
};

export default CompanyCreateComponent;
