import React, { useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";

const ImgUpload = ({
  fileID,
  labelName,
  handleFileChange,
  image,
  handleDrop,
}) => {
  return (
    <div className="rounded-lg py-4 bg-white">
      <h2 className="text-3xl font-semibold ">{labelName}</h2>
      <div className="bg-white w-full">
        <div className="">
          <div className="flex">
            {/* Other content can go here */}
            <input
              id={fileID}
              type="file"
              accept="image/png, image/jpeg, image/gif"
              onChange={handleFileChange}
              className="hidden"
            />
            <div className="image-uploader-sections">
            <div className="img-container">
                {image && (
                  <img
                    src={image}
                    alt="Uploaded Preview"
                    className=" rounded-lg upload-img-logo-company object-contain"
                  />
                )}
              </div>
              <div
                className="width-cstm-for-upload-logosettings border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 flex flex-col items-center justify-center p-2 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => document.getElementById(`${fileID}`).click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
              >
                <MdOutlineCloudUpload className="text-gray-500" />
              </div>
              <button className="apply-leave-btn mx-1 border border-rounded bg-gray-200 text-black px-2 py-2 rounded w-full md:w-auto ">
                Remove
              </button>
              <span className="text-xs text-center text-red-700 mt-1">
                "Upload Files Only gif, png, jpg, jpeg. Best Size 160*40. White
                background with black text"
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgUpload;
