import React, { useState } from "react";
import ReactQuill from "react-quill";

export const TextAreaEditor = () => {
  const [editorContent, setEditorContent] = useState("");

  const handleChange = (content) => {
    setEditorContent(content);
  };
  return (
    <div className="">
      <div className="w-full">
        <label className="block text-gray-700 font-bold mb-2">
          Address
          {/* <span className="text-red-500 text-sm ml-1">*</span> */}
        </label>
        <ReactQuill
          value={editorContent}
          onChange={handleChange}
          placeholder="Write your Address here..."
          theme="snow"
          className=" rounded-lg announcement-quill"
          // style={{ height: "200px" }}
        />
      </div>
    </div>
  );
};
