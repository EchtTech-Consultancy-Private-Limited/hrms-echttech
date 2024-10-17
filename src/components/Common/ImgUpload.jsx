import React, { useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";

const ImgUpload = () => {
  const [image, setImage] = useState(null);

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

  return (
    <div className="rounded-lg p-4 bg-white" >
      <h2 className="text-3xl font-semibold " >Logo Title</h2>
      <div className="bg-white w-full">
        <h2 className="text-lg font-semibold mb-4">First Logo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex">
            {/* Other content can go here */}
            <input
              id="file_upload"
              type="file"
              accept="image/png, image/jpeg, image/gif"
              onChange={handleFileChange}
              className="hidden"
            />
            <div className="flex item-center" >
            <div
              className="width-cstm-for-upload-logosettings border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 flex flex-col items-center justify-center p-2 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => document.getElementById("file_upload").click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
            >
              <MdOutlineCloudUpload className="text-gray-500" />
              <span className="text-xs text-center text-red-700 mt-1">
                "Upload Files Only gif, png, jpg, jpeg. Consider Size 160*40. White background with black text"
              </span>
            </div>
            <div className="ml-2" >
            {image && (
              <img
                src={image}
                alt="Uploaded Preview"
                className="mt-2 rounded-lg upload-img-logo-company"
                
              />
            )}
            </div>
            
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgUpload;
