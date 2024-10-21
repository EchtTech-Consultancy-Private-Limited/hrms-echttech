import React from 'react'

const InputFiled = ({fileType, filedName, filedplaceholder, filedlabelName, mandtStar}) => {
  return (
    <div>
       <label
            htmlFor="start-date"
            className="block text-black font-bold"
            >
            {filedlabelName}
            <span className="text-red-500 text-sm ml-1">{mandtStar}</span>
        </label>
        <input
            type={fileType}
            id={filedName}
            name={filedName}
            placeholder={filedplaceholder}
            className="custom-width-ann-sd block p-2 border border-gray-300 rounded-md"
        />
    </div>
  )
}

export default InputFiled
