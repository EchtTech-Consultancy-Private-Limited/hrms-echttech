import React, { useState } from "react";
import styled from "styled-components";
import { FaCloudUploadAlt } from "react-icons/fa";
import { HideLoading, ShowLoading } from "../../reduxapis/slice/alertsSlice";
import ReactQuill from "react-quill";
import { useDispatch } from "react-redux";
import InputFiled from "../Common/InputFiled";
import Selector from "../Common/Selector";

const CompanyCreateComponent = () => {
  const selectorData = [
    { name: "Afghanistan", cca2: "AF", flag: "🇦🇫", code: "93" },
    { name: "India", cca2: "IN", flag: "🇮🇳", code: "91" },
  ];
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
                <Selector selectorData={selectorData} />
              </div>
            </div>

            <div className="first mb-4">
              <InputFiled
                fileType="text"
                filedName="companyName"
                filedplaceholder="Company Name"
                filedlabelName="Company Name"
              />
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

                <div className="relative group">
                  <Selector selectorData={selectorData} />
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
                  <Selector selectorData={selectorData} />
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
                  <Selector selectorData={selectorData} />
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
              <h1 className="text-lg  font-bold">Corporate office</h1>
              <div className="same-add">
                <input type="checkbox" />
                <label htmlFor="">(Same Registered office)</label>
              </div>
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
                  <Selector selectorData={selectorData} />
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
                  <Selector selectorData={selectorData} />
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
                  <Selector selectorData={selectorData} />
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
              <div className="selector-parent">
                <label
                  for="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Certification Type
                </label>

                <div className="relative z-10 group">
                  <Selector selectorData={selectorData} />
                </div>
              </div>
            </div>

            <div className="first mb-4">
              <label for="type" className="block text-gray-700 font-bold mb-2">
                Level
              </label>

              <div className="relative z-10 group">
                <Selector selectorData={selectorData} />
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
              <div className="selector-parent">
                <label
                  for="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Certification Type
                </label>

                <div className="relative z-10 group">
                  <Selector selectorData={selectorData} />
                </div>
              </div>
            </div>
            <div className="first mb-4">
              <label for="type" className="block text-gray-700 font-bold mb-2">
                Level
              </label>

              <div className="relative z-10 group">
                <Selector selectorData={selectorData} />
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
