import React, { useState } from "react";
import ImgUpload from "../Common/ImgUpload";

  const SystemLogoComponent = ()=>{
    const [image, setImage] = useState(null);
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);

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
  return (
    <>
     <ImgUpload fileID="1setlogo" labelName= "First Logo" handleFileChange={handleFileChange} image={image} handleDrop={handleDrop}/>
     <ImgUpload fileID="2setlogo" labelName= "Second Logo"  handleFileChange={handleFileChange1} image={image1} handleDrop={handleDrop1}/>
     <ImgUpload fileID="3setlogo" labelName= "Fevicon Logo"  handleFileChange={handleFileChange2} image={image2} handleDrop={handleDrop2} />
    </>
    
  )
};

export default SystemLogoComponent;
