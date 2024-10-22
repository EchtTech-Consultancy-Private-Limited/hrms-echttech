import React, { useState } from "react";
import ImgUpload from "../Common/ImgUpload";

const SystemLogoComponent = () => {
  const [image, setImage] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [image5, setImage5] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/gif"];
      if (validTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please upload a valid image file (gif, png, jpg, jpeg).");
      }
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      handleFileChange({ target: { files: [file] } });
    }
  };
  const handleFileChange1 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/gif"];
      if (validTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage1(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please upload a valid image file (gif, png, jpg, jpeg).");
      }
    }
  };

  const handleDrop1 = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      handleFileChange1({ target: { files: [file] } });
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

  const handleFileChange3 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/gif"];
      if (validTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage3(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please upload a valid image file (gif, png, jpg, jpeg).");
      }
    }
  };

  const handleDrop3 = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      handleFileChange3({ target: { files: [file] } });
    }
  };

  const handleFileChange4 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/gif"];
      if (validTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage4(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please upload a valid image file (gif, png, jpg, jpeg).");
      }
    }
  };

  const handleDrop4 = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      handleFileChange4({ target: { files: [file] } });
    }
  };

  const handleFileChange5 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/gif"];
      if (validTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage5(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please upload a valid image file (gif, png, jpg, jpeg).");
      }
    }
  };

  const handleDrop5 = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      handleFileChange5({ target: { files: [file] } });
    }
  };

 
 

  return (
    <>
      <div className=" rounded-lg bg-white system-log-catch top-head">
        <div className="to-hdr flex justify-between pb-3 w-full text-black">
          <h1 className="text-lg font-bold">System Logo</h1>
        </div>
        <hr className="mb-6" />
        <div className="p-4">
          <div className="flex items-center justify-evenly">
            <div className="img-main-container">
              <label htmlFor="text-lg mb-4 font-exrabold">
                First/Company Logo
              </label>
              <ImgUpload
                fileID="1setlogo"
                labelName=""
                handleFileChange={handleFileChange}
                image={image}
                handleDrop={handleDrop}
              
              />
            </div>
            <div className="img-main-container">
              <label htmlFor="text-lg mb-4 font-exrabold">Second Logo</label>
              <ImgUpload
                className="text-lg mb-4 font-bold"
                fileID="2setlogo"
                labelName=""
                handleFileChange={handleFileChange1}
                image={image1}
                handleDrop={handleDrop1}
                
              />
            </div>
            <div className="img-main-container">
              <label htmlFor="text-lg mb-4 font-exrabold">Favicon</label>
              <ImgUpload
                className="text-lg mb-4 font-bold"
                fileID="3setlogo"
                labelName=""
                handleFileChange={handleFileChange2}
                image={image2}
                handleDrop={handleDrop2}
                
              />
            </div>
          </div>

          <div className="add-reset-btns flex items-center justify-end">
            <button className="apply-leave-btn mx-1 main-bg-color text-white px-2 py-2 rounded w-full md:w-auto ">
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 system-log-catch">
        <div className="bg-white rounded-lg top-head">
          <div className="to-hdr flex justify-between pb-3 w-full text-black">
            <h1 className="text-lg font-bold">Sign In Page</h1>
          </div>
          <hr className="mb-6" />
          <div className="p-4">
            <div className="flex items-center justify-evenly">
              <div className="img-main-container">
                <label htmlFor="text-lg mb-4 font-exrabold">
                  First/Company Logo
                </label>
                <ImgUpload
                  fileID="4setlogo"
                  labelName=""
                  handleFileChange={handleFileChange3}
                  image={image3}
                  handleDrop={handleDrop3}
                
                />
              </div>
              <div className="img-main-container">
                <label htmlFor="text-lg mb-4 font-exrabold">Product Logo</label>
                <ImgUpload
                  className="text-lg mb-4 font-bold"
                  fileID="5setlogo"
                  labelName=""
                  handleFileChange={handleFileChange4}
                  image={image4}
                  handleDrop={handleDrop4}
                 
                />
              </div>
            </div>
            <div className="add-reset-btns flex items-center justify-end">
              <button className="apply-leave-btn mx-1 main-bg-color text-white px-2 py-2 rounded w-full md:w-auto ">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 system-log-catch">
        <div className="bg-white rounded-lg top-head">
          <div className="to-hdr flex justify-between pb-3 w-full text-black">
            <h1 className="text-lg font-bold">Payroll Logo</h1>
          </div>
          <hr className="mb-6" />
          <div className="p-4">
            <div className="flex items-center justify-evenly">
              <div className="img-main-container remove-btn">
                <label htmlFor="text-lg mb-4 font-exrabold">
                  First/Company Logo
                </label>
                <ImgUpload
                  fileID="6setlogo"
                  labelName=""
                  handleFileChange={handleFileChange5}
                  image={image5}
                  handleDrop={handleDrop5}
                  
                />
              </div>
            </div>
            <div className="add-reset-btns flex items-center justify-end">
              <button className="apply-leave-btn mx-1 main-bg-color text-white px-2 py-2 rounded w-full md:w-auto ">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SystemLogoComponent;
