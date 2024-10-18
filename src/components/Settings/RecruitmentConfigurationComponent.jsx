import React, { useState } from "react";
import Selector from "../Common/Selector";
import ImgUpload from "../Common/ImgUpload";

const RecruitmentConfigurationComponent = () => {
  const [isJobsEnabled, setIsJobsEnabled] = useState(false);
  const [image2, setImage2] = useState(null);
  const selectorData = [
    { name: "Afghanistan", cca2: "AF", flag: "🇦🇫", code: "93" },
    { name: "India", cca2: "IN", flag: "🇮🇳", code: "91" },
  ];

  const handleToggle = () => {
    setIsJobsEnabled((prevState) => !prevState);
  };

  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/gif"];
      if (validTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage2(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please upload a valid image file (gif, png, jpg, jpeg).");
      }
    }
  };

  const handleDrop2 = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      handleFileChange2({ target: { files: [file] } });
    }
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-6">
      {/* First Card: Recruitment Configuration */}
      <div className="bg-white rounded-lg shadow-lg w-full ">
       <div className="top-hdr flex justify-between">
          <h1 className="font-bold text-lg">Login Method</h1>
        </div>
        <hr className="mb-6"></hr>
        {/* Toggle Switch */}
        <div className="flex items-center mb-4 p-4">
          <div className="w-1/2">
            <label className="mr-2 block text-black font-bold ">
              Enable Jobs for Employees
            </label>

            <div className="toggle-switch w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ease-in-out bg-gray-300">
              <div className="bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out translate-x-1"></div>
            </div>
          </div>

          <div className="w-1/2">
            <label
              className="mb-2 block text-black font-bold "
              htmlFor="fileFormat"
            >
              Job Application File Format
            </label>

            <div className="relative  group">
                  <Selector selectorData={selectorData} />
                </div>
          </div>
        </div>
      </div>

      {/* Second Card: Job Listing (Logo Frontend) */}
      <div className="bg-white rounded-lg shadow-lg  w-full">
      <div className="top-hdr flex justify-between">
          <h1 className="font-bold text-lg">System Logo</h1>
        </div>
        <hr className="mb-6"></hr>
        
        <div className="flex items-center mb-4">
          <div className="w-full">
            <div className=" system-log-catch">
              <div className="bg-white rounded-lg p-4">
                <label htmlFor="text-lg mb-4 font-exrabold">Logo</label>
                <ImgUpload
                  className="text-lg mb-4 font-bold"
                  fileID="3setlogo"
                  labelName=""
                  handleFileChange={handleFileChange2}
                  image={image2}
                  handleDrop={handleDrop2}
                />
                <div className="add-reset-btns flex items-center justify-end">
                  <button className="apply-leave-btn mx-1 main-bg-color text-white px-2 py-2 rounded w-full md:w-auto ">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentConfigurationComponent;
