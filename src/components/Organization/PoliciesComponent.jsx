import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PoliciesComponent = () => {
  const [editorContent, setEditorContent] = useState('');

  const handleEditorChange = (value) => {
    setEditorContent(value);
  };
  return (
    <>
      <div className="flex md:flex-row flex-col justify-between items-center gap-x-4">
        <div className="w-full top-section mt-10 p-4 border rounded-lg bg-white">
          <div className="top-head ">
            <div className="flex justify-between pb-3 w-full text-black">
              <h1 className="text-lg font-bold">Add New Policy</h1>

            </div>
            <hr className="mb-6" />
            {/* Policy Form Section */}
            <div className="department-below-sect w-full">
            <div className="flex flex-col md:flex-row md:space-x-4 justify-between">
  {/* Policy Title (Half Width) */}
  <div className="w-full md:w-1/2 bg-white rounded-lg mb-4">
    <label className="block text-black font-bold m-2">Policy Title</label>
    <input
      type="text"
      className="block w-full p-2 border border-gray-300 rounded-md"
      placeholder="Enter designation name"
    />
  </div>

  {/* Company Type (Half Width) */}
  <div className="w-full md:w-1/2 bg-white mb-4 rounded-lg">
    <label className="block text-black font-bold m-2">Company Type</label>
    <select className="block w-full p-2 border border-gray-300 rounded-md">
      <option>Select Company Type</option>
      <option>Government</option>
      <option>Private</option>
      <option>LLP</option>
      <option>Foundation</option>
    </select>
  </div>
</div>

{/* Quill Text Editor Section (Full Width) */}
<div className="policy-text-editor mb-4">
  <label className="block text-black font-bold m-2">Policy Content</label>
  <ReactQuill
    value={editorContent}
    onChange={handleEditorChange}
    className="bg-white w-full"
  />
</div>

              <div className="add-reset-btns flex justify-end">
                <button
                  className="apply-leave-btn mx-1 bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto text-sm"
                >
                  Save
                </button>
                <button
                  className="apply-leave-btn bg-gray-400 text-white px-4 py-2 rounded w-full md:w-auto text-sm"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PoliciesComponent
