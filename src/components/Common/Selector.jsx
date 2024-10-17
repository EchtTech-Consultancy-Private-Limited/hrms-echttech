import React, { useEffect, useState } from 'react'
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Selector = () => {
    const [dataVal, setCountries] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);
    const selectorData =[{"name": "Afghanistan", "cca2": "AF", "flag": "🇦🇫", "code": "93"},{"name": "India", "cca2": "IN", "flag": "🇮🇳", "code": "91"}];
  
    useEffect(() => {
      setCountries(selectorData)
    }, []);
  return (
    <div className="font-medium">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center justify-between rounded ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Select Country"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter name"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        {dataVal?.map((optionVal) => (
          <li
            key={optionVal?.name}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              optionVal?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              optionVal?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (optionVal?.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(optionVal?.name);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {optionVal?.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Selector
