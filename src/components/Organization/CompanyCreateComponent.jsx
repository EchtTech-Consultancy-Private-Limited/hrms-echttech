import React, { useState } from "react";
import styled from "styled-components";
import { FaCloudUploadAlt } from "react-icons/fa";
import { HideLoading, ShowLoading } from "../../reduxapis/slice/alertsSlice";
import ReactQuill from "react-quill";
import { useDispatch } from "react-redux";
import InputFiled from "../Common/InputFiled";

const CompanyCreateComponent = () => {
  // Dropdown state
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState("Select type");
  const dispatch = useDispatch();
  //dispatch(ShowLoading());
  // Dropdown items
  const items = [
    "Privileged type",
    "Vacation type",
    "Earned type",
    "Casual type",
  ];

  // Toggle dropdown visibility
  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  // Filter items based on search input
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ---------------------------------------

  // Dropdown for country
  const [isOpencountry, setIsOpencountry] = useState(false);
  const [searchTermcountry, setSearchTermcountry] = useState("");
  const [selectedItemcountry, setSelectedItemcountry] = useState("India");

  // Dropdown items
  const itemcountry = ["India", "Pakistan", "Bangladesh", "Nepal"];

  // Toggle dropdown visibility
  const toggleDropdowncountry = (e) => {
    e.preventDefault();
    setIsOpencountry((prev) => !prev);
  };

  const filteredItemscountry = itemcountry.filter((item) =>
    item.toLowerCase().includes(searchTermcountry.toLowerCase())
  );
  // Text-Area first

  const [editorContent, setEditorContent] = useState("");

  const handleChange = (content) => {
    setEditorContent(content);
  };

  // Text-Area second

  const [editorContentOne, setEditorContentOne] = useState("");

  const handleChangeOne = (content) => {
    setEditorContentOne(content);
  };

  
  return (
    <div className="w-full top-section p-4 border rounded-lg bg-white">
      <div className="top-head ">
        <div className="flex justify-between pb-3 w-full text-black">
          <h1 className="text-lg font-bold">Company Information</h1>
        </div>
        <hr className="mb-6" />
        {/* Department Form Section */}
        <div className="department-below-sect form-labels">
          <div className=" flex-gap justify-between">
            <div className="first mb-4">
              <label for="type" className="block text-gray-700 font-bold mb-2">
                Company Type
              </label>

              <div className="relative z-10 group">
                <button
                  onClick={toggleDropdown}
                  type="button"
                  className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                >
                  <span className="mr-2">{selectedItem}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-2 -mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="absolute w-full right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1">
                    <input
                      className="block w-full px-4 py-2 text-gray-800 border rounded-md border-gray-300 focus:outline-none"
                      type="text"
                      placeholder="Search items"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      autoComplete="off"
                    />
                    {filteredItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded"
                        onClick={() => {
                          // Handle item click
                          // console.log(item);
                          setSelectedItem(item); // Update selected item
                          setIsOpen(false);
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="first mb-4">
              <InputFiled fileType="text" filedName="companyName" filedplaceholder="Company Name" filedlabelName="Company Name"/>
            </div>

            <div className="first mb-4">
              <label htmlFor="" className="block text-gray-700 font-bold mb-2">
                Legal/Tranding Name
              </label>
              <input
                className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                type="text"
                placeholder="Legal/Tranding Name"
              />
            </div>

            <div className="first mb-4">
              <label htmlFor="" className="block text-gray-700 font-bold mb-2">
                Registration Number
              </label>
              <input
                className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                type="text"
                placeholder="Registration Number"
              />
            </div>
            <div className="first mb-4">
              <label htmlFor="" className="block text-gray-700 font-bold mb-2">
                GST Number
              </label>
              <input
                className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                type="text"
                placeholder="GST Number"
              />
            </div>

            <div className="first mb-4">
              <label htmlFor="" className="block text-gray-700 font-bold mb-2">
                Pan Number
              </label>
              <input
                className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                type="text"
                placeholder="Pan Number"
              />
            </div>

            <div className="first mb-4">
              <label htmlFor="" className="block text-gray-700 font-bold mb-2">
                TAN Number
              </label>
              <input
                className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                type="text"
                placeholder="TAN Number"
              />
            </div>

            <div className="first mb-4">
              <label htmlFor="" className="block text-gray-700 font-bold mb-2">
                CIN Number
              </label>
              <input
                className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                type="text"
                placeholder="CIN Number"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="both-address template-section">
        <div className="template-section reg-add">
          <div className="flex justify-between p-4 w-full text-black">
            <h1 className="text-lg  font-bold">Registered office</h1>
          </div>
          <hr className="mb-6" />
          {/* Department Form Section */}
          <div className="department-below-sect form-labels">
            <div className="justifu-between flex-gap template-sec">
              <div className="first mb-4">
                <label
                  for="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Country
                </label>

                <div className="relative z-10 group">
                  <button
                    onClick={toggleDropdown}
                    type="button"
                    className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                  >
                    <span className="mr-2">{selectedItem}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-2 -mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="absolute w-full right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1">
                      <input
                        className="block w-full px-4 py-2 text-gray-800 border rounded-md border-gray-300 focus:outline-none"
                        type="text"
                        placeholder="Search items"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        autoComplete="off"
                      />
                      {filteredItems.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded"
                          onClick={() => {
                            // Handle item click
                            // console.log(item);
                            setSelectedItem(item); // Update selected item
                            setIsOpen(false);
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="first mb-4">
                <label
                  for="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  State
                </label>

                <div className="relative z-10 group">
                  <button
                    onClick={toggleDropdown}
                    type="button"
                    className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                  >
                    <span className="mr-2">{selectedItem}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-2 -mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="absolute w-full right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1">
                      <input
                        className="block w-full px-4 py-2 text-gray-800 border rounded-md border-gray-300 focus:outline-none"
                        type="text"
                        placeholder="Search items"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        autoComplete="off"
                      />
                      {filteredItems.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded"
                          onClick={() => {
                            // Handle item click
                            // console.log(item);
                            setSelectedItem(item); // Update selected item
                            setIsOpen(false);
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="first mb-4">
                <label
                  for="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  City
                </label>

                <div className="relative z-10 group">
                  <button
                    onClick={toggleDropdown}
                    type="button"
                    className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                  >
                    <span className="mr-2">{selectedItem}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-2 -mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="absolute w-full right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1">
                      <input
                        className="block w-full px-4 py-2 text-gray-800 border rounded-md border-gray-300 focus:outline-none"
                        type="text"
                        placeholder="Search items"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        autoComplete="off"
                      />
                      {filteredItems.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded"
                          onClick={() => {
                            // Handle item click
                            // console.log(item);
                            setSelectedItem(item); // Update selected item
                            setIsOpen(false);
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full second-child">
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
                style={{ height: "200px" }}
              />
            </div>
          </div>
        </div>
        <div className="template-section corp-add">
          <div className="flex justify-between p-4 w-full text-black">
            <div className="flex items-center">
              <div className="same-add">
                <input type="checkbox" />
                <label htmlFor="">(Same Registered office)</label>
              </div>
              <h1 className="text-lg  font-bold">Corporate office</h1>
            </div>
          </div>
          <hr className="mb-6" />
          {/* Department Form Section */}
          <div className="department-below-sect form-labels">
            <div className="justifu-between flex-gap template-sec">
              <div className="first mb-4">
                <label
                  for="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Country
                </label>

                <div className="relative z-10 group">
                  <button
                    onClick={toggleDropdown}
                    type="button"
                    className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                  >
                    <span className="mr-2">{selectedItem}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-2 -mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="absolute w-full right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1">
                      <input
                        className="block w-full px-4 py-2 text-gray-800 border rounded-md border-gray-300 focus:outline-none"
                        type="text"
                        placeholder="Search items"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        autoComplete="off"
                      />
                      {filteredItems.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded"
                          onClick={() => {
                            // Handle item click
                            // console.log(item);
                            setSelectedItem(item); // Update selected item
                            setIsOpen(false);
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="first mb-4">
                <label
                  for="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  State
                </label>

                <div className="relative z-10 group">
                  <button
                    onClick={toggleDropdown}
                    type="button"
                    className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                  >
                    <span className="mr-2">{selectedItem}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-2 -mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="absolute w-full right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1">
                      <input
                        className="block w-full px-4 py-2 text-gray-800 border rounded-md border-gray-300 focus:outline-none"
                        type="text"
                        placeholder="Search items"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        autoComplete="off"
                      />
                      {filteredItems.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded"
                          onClick={() => {
                            // Handle item click
                            // console.log(item);
                            setSelectedItem(item); // Update selected item
                            setIsOpen(false);
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="first mb-4">
                <label
                  for="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  City
                </label>

                <div className="relative z-10 group">
                  <button
                    onClick={toggleDropdown}
                    type="button"
                    className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                  >
                    <span className="mr-2">{selectedItem}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-2 -mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="absolute w-full right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1">
                      <input
                        className="block w-full px-4 py-2 text-gray-800 border rounded-md border-gray-300 focus:outline-none"
                        type="text"
                        placeholder="Search items"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        autoComplete="off"
                      />
                      {filteredItems.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded"
                          onClick={() => {
                            // Handle item click
                            // console.log(item);
                            setSelectedItem(item); // Update selected item
                            setIsOpen(false);
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full second-child">
              <label className="block text-gray-700 font-bold mb-2">
                Address
                {/* <span className="text-red-500 text-sm ml-1">*</span> */}
              </label>
              <ReactQuill
                value={editorContentOne}
                onChange={handleChangeOne}
                placeholder="Write your Address here..."
                theme="snow"
                className=" rounded-lg announcement-quill"
                style={{ height: "200px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="template-section ">
        <div className="flex justify-between p-4 w-full text-black">
          <h1 className="text-lg  font-bold">Contact Person Information</h1>
        </div>
        <hr className="mb-6" />
        {/* Department Form Section */}
        <div className="department-below-sect form-labels">
          <div className="flex-gap template-sec justify-between">
            <div className="first mb-4">
              <label htmlFor="" className="block text-gray-700 font-bold mb-2">
                Contact Number
              </label>
              <input
                className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                type="text"
                placeholder="Contact Number"
              />
            </div>

            <div className="first mb-4">
              <label htmlFor="" className="block text-gray-700 font-bold mb-2">
                Whatsapp Number
              </label>
              <input
                className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                type="text"
                placeholder="Whatsapp Number"
              />
            </div>

            <div className="first mb-4">
              <label htmlFor="" className="block text-gray-700 font-bold mb-2">
                Email id
              </label>
              <input
                className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                type="text"
                placeholder="Email id"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="template-section ">
        <div className="flex justify-between p-4 w-full text-black">
          <h1 className="text-lg  font-bold">ISO Certificate Information</h1>
        </div>
        <hr className="mb-6" />
        {/* Department Form Section */}
        <div className="department-below-sect form-labels">
          <div className="flex-gap template-sec justify-between">
            <div className="first mb-4">
              <label for="type" className="block text-gray-700 font-bold mb-2">
                Certification Type
              </label>

              <div className="relative z-10 group">
                <button
                  onClick={toggleDropdown}
                  type="button"
                  className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                >
                  <span className="mr-2">{selectedItem}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-2 -mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="absolute w-full right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1">
                    <input
                      className="block w-full px-4 py-2 text-gray-800 border rounded-md border-gray-300 focus:outline-none"
                      type="text"
                      placeholder="Search items"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      autoComplete="off"
                    />
                    {filteredItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded"
                        onClick={() => {
                          // Handle item click
                          // console.log(item);
                          setSelectedItem(item); // Update selected item
                          setIsOpen(false);
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="first mb-4">
              <label for="type" className="block text-gray-700 font-bold mb-2">
                Level
              </label>

              <div className="relative z-10 group">
                <button
                  onClick={toggleDropdown}
                  type="button"
                  className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                >
                  <span className="mr-2">{selectedItem}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-2 -mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="absolute w-full right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1">
                    <input
                      className="block w-full px-4 py-2 text-gray-800 border rounded-md border-gray-300 focus:outline-none"
                      type="text"
                      placeholder="Search items"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      autoComplete="off"
                    />
                    {filteredItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded"
                        onClick={() => {
                          // Handle item click
                          // console.log(item);
                          setSelectedItem(item); // Update selected item
                          setIsOpen(false);
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="first mb-4">
              <label htmlFor="" className="block text-gray-700 font-bold mb-2">
                Certification Authority
              </label>
              <input
                className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                type="text"
                placeholder="Certification Authority
"
              />
            </div>

            <div className="first mb-4">
              <label htmlFor="" className="block text-gray-700 font-bold mb-2">
                Validity Period
              </label>
              <input
                className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                type="date"
                placeholder="Whatsapp Number"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="template-section ">
        <div className="flex justify-between p-4 w-full text-black">
          <h1 className="text-lg  font-bold">
            Employment Certificate Information
          </h1>
        </div>
        <hr className="mb-6" />
        {/* Department Form Section */}
        <div className="department-below-sect form-labels">
          <div className="flex-gap template-sec justify-between">
            <div className="first mb-4">
              <label for="type" className="block text-gray-700 font-bold mb-2">
                Certification Type
              </label>

              <div className="relative z-10 group">
                <button
                  onClick={toggleDropdown}
                  type="button"
                  className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                >
                  <span className="mr-2">{selectedItem}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-2 -mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="absolute w-full right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1">
                    <input
                      className="block w-full px-4 py-2 text-gray-800 border rounded-md border-gray-300 focus:outline-none"
                      type="text"
                      placeholder="Search items"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      autoComplete="off"
                    />
                    {filteredItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded"
                        onClick={() => {
                          // Handle item click
                          // console.log(item);
                          setSelectedItem(item); // Update selected item
                          setIsOpen(false);
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="first mb-4">
              <label for="type" className="block text-gray-700 font-bold mb-2">
                Level
              </label>

              <div className="relative z-10 group">
                <button
                  onClick={toggleDropdown}
                  type="button"
                  className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                >
                  <span className="mr-2">{selectedItem}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-2 -mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="absolute w-full right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1">
                    <input
                      className="block w-full px-4 py-2 text-gray-800 border rounded-md border-gray-300 focus:outline-none"
                      type="text"
                      placeholder="Search items"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      autoComplete="off"
                    />
                    {filteredItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded"
                        onClick={() => {
                          // Handle item click
                          // console.log(item);
                          setSelectedItem(item); // Update selected item
                          setIsOpen(false);
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="first mb-4">
              <label htmlFor="" className="block text-gray-700 font-bold mb-2">
                Certification Authority
              </label>
              <input
                className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                type="text"
                placeholder="Certification Authority"
              />
            </div>

            <div className="first mb-4">
              <label htmlFor="" className="block text-gray-700 font-bold mb-2">
                Validity Period
              </label>
              <input
                className="border border-gray-300 text-gray-500 p-2 h-9 rounded w-full"
                type="date"
                placeholder="Whatsapp Number"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="add-reset-btns top-border flex items-center justify-end p-4">
        <button className="apply-leave-btn mx-1 main-bg-color text-white px-2 py-2 rounded w-full md:w-auto ">
          Save
        </button>
        <button className="apply-leave-btn bg-gray-400 text-white px-2 py-2 rounded w-full md:w-auto">
          Reset
        </button>
      </div>
    </div>

  );
};

export default CompanyCreateComponent;
