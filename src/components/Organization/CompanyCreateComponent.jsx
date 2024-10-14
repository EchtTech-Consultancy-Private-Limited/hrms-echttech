import React, { useState } from "react";
import styled from "styled-components";
import { FaCloudUploadAlt } from "react-icons/fa";

const CompanyCreateComponent = () => {
  const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `;

  const AvatarWrapper = styled.div`
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    background: #e9ecef;
    cursor: pointer;
  `;

  const Avatar = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;

  const Placeholder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 12px;
    color: #555;
  `;

  const Input = styled.input`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  `;

  const ButtonWrapper = styled.div`
    display: flex;
    gap: 10px;
  `;

  const UploadButton = styled.button`
    background-color: #004085;
    color: white;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.3s;
    &:hover {
      background-color: #002752;
    }
    &:disabled {
      background-color: #a8a8a8;
      cursor: not-allowed;
    }
  `;

  const DeleteButton = styled.button`
    background-color: #d9534f;
    color: white;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.3s;
    &:hover {
      background-color: #c9302c;
    }
    &:disabled {
      background-color: #a8a8a8;
      cursor: not-allowed;
    }
  `;

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    if (image) {
      console.log("Image uploaded:", image);
      // Here you would typically send 'image' to your backend server
      alert("Image uploaded successfully!");
    }
  };

  const handleDelete = () => {
    setImage(null);
    setPreview(null);
  };
  return (
    <div className="form-container shadow radius">
      <div className="top-hdr flex justify-between">
        <h1 className="pb-3 font-bold text-lg">Add New Company</h1>
      </div>
      <hr class="mb-6"></hr>
      <form className="mt-5">
        <div className="form-step">
          <div className="form-labels">
            <div className="row first-row flex items-center flex-wrap justify-start md:space-x-3 justify-between flex-gap">
              <div className="first mb-4">
                <label
                  htmlFor=""
                  className="block text-gray-700 font-bold mb-2"
                >
                  Company Name
                </label>
                <input
                  className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                  type="text"
                  placeholder="Company Name"
                />
              </div>

              <div className="first mb-4">
                <label
                  for="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Company Type
                </label>
                <select
                  name="type"
                  id="type"
                  className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                >
                  <option value="volvo">Private Company</option>
                  <option value="saab">Government Company</option>
                  <option value="opel">Other</option>
                </select>
              </div>

              <div className="first mb-4">
                <label
                  htmlFor=""
                  className="block text-gray-700 font-bold mb-2"
                >
                  Legal/Tranding Name
                </label>
                <input
                  className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                  type="text"
                  placeholder="Legal/Tranding Name"
                />
              </div>

              <div className="first mb-4">
                <label
                  htmlFor=""
                  className="block text-gray-700 font-bold mb-2"
                >
                  Registration Number
                </label>
                <input
                  className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                  type="text"
                  placeholder="Registration Number"
                />
              </div>
              <div className="first mb-4">
                <label
                  htmlFor=""
                  className="block text-gray-700 font-bold mb-2"
                >
                  Contact Number
                </label>
                <input
                  className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                  type="text"
                  placeholder="Contact Number"
                />
              </div>

              <div className="first mb-4">
                <label
                  htmlFor=""
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                  type="text"
                  placeholder="Email"
                />
              </div>

              <div className="first mb-4">
                <label
                  htmlFor=""
                  className="block text-gray-700 font-bold mb-2"
                >
                  Website
                </label>
                <input
                  className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                  type="text"
                  placeholder="Website"
                />
              </div>

              <div className="first mb-4">
                <label
                  htmlFor=""
                  className="block text-gray-700 font-bold mb-2"
                >
                  Government Tax Number/EIN
                </label>
                <input
                  className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                  type="text"
                  placeholder="Registration Number"
                />
              </div>

              <div className="first mb-4">
                <div className="address-with-label">
                  <label
                    htmlFor=""
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Address
                  </label>
                  <input
                    className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                    type="text"
                    placeholder="Address Line 1"
                  />
                </div>
              </div>
              <div className="first mb-4">
                <label
                  htmlFor=""
                  className="block text-gray-700 font-bold mb-2"
                >
                  Address 2
                </label>
                <input
                  className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                  type="text"
                  placeholder="Address Line 2"
                />
              </div>

              <div className="first mb-4">
                <label
                  htmlFor=""
                  className="block text-gray-700 font-bold mb-2"
                >
                  City
                </label>
                <input
                  className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                  type="text"
                  placeholder="City"
                />
              </div>
              <div className="first mb-4">
                <label
                  htmlFor=""
                  className="block text-gray-700 font-bold mb-2"
                >
                  State/Province
                </label>
                <input
                  className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                  type="text"
                  placeholder="State/Province"
                />
              </div>
              <div className="first mb-4">
                <label
                  htmlFor=""
                  className="block text-gray-700 font-bold mb-2"
                >
                  Zip Code/Postal Code
                </label>
                <input
                  className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                  type="text"
                  placeholder="Zip Code/Postal Code"
                />
              </div>
              <div className="first mb-4">
                <label
                  htmlFor=""
                  className="block text-gray-700 font-bold mb-2"
                >
                  Countary
                </label>
                <select
                  name="type"
                  id="type"
                  className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                >
                  <option value="volvo">Countary</option>
                  <option value="saab">India</option>
                  <option value="opel">Pakistan</option>
                </select>
              </div>
            </div>

            {/* <div className="row flex second-row items-center mt-5">
                  
                </div>

                <div className="row flex third-row items-center mt-10">
                  
                </div> */}
          </div>
          <div className="button mt-10 flex justify-between">
            <div className="upload-sec">
              {/* <div className="logo-uploaded">
                <img src={employee_img} alt="" />
              </div> */}
              <Container>
                <AvatarWrapper>
                  {preview ? (
                    <Avatar src={preview} alt="Preview" />
                  ) : (
                    <Placeholder><FaCloudUploadAlt className="text-xl"/></Placeholder>
                  )}
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </AvatarWrapper>
                <ButtonWrapper>
                  <UploadButton onClick={handleUpload} disabled={!image}>
                    Upload
                  </UploadButton>
                  <DeleteButton onClick={handleDelete} disabled={!image}>
                    Delete
                  </DeleteButton>
                </ButtonWrapper>
              </Container>
              
            </div>

            <div className="add-reset-btns flex items-center justify-end">
              <button className="apply-leave-btn mx-1 main-bg-color text-white px-2 py-2 rounded w-full md:w-auto ">
                Save
              </button>
              <button className="apply-leave-btn bg-gray-400 text-white px-2 py-2 rounded w-full md:w-auto">
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
