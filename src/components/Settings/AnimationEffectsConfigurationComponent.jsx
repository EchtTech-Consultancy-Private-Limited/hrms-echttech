import React from 'react';
import Selector from '../Common/Selector';

const AnimationEffectsConfigurationComponent = () => {
  const selectorData = [
    { name: "Afghanistan", cca2: "AF", flag: "🇦🇫", code: "93" },
    { name: "India", cca2: "IN", flag: "🇮🇳", code: "91" },
  ];
  return (
    <div className="flex justify-center">
      
      <div className="bg-white rounded-lg shadow-lg w-full">

        <div className="top-hdr flex justify-between">
          <h1 className="font-bold text-lg">Animation Effect Configuration </h1>
        </div>
        <hr className="mb-6"></hr>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {/* First Block */}
          <div className="flex flex-col">
            <label className="mb-2 block text-black font-bold " htmlFor="animationEffect1">Select Animation Effect 1</label>
            <div className="relative z-10 group">
                <Selector selectorData={selectorData} />
              </div>
            <p className="mb-2 ml-1 text-sm font-medium">Set animation effect for top menu</p>
          </div>

          {/* Second Block */}
          <div className="flex flex-col">
            <label className="mb-2 block text-black font-bold " htmlFor="animationEffect1">Select Animation Effect 1</label>

            <div className="relative z-10 group">
                <Selector selectorData={selectorData} />
              </div>
            <p className="mb-2 ml-1 text-yellow text-sm font-medium">Set animation effect for Modal</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationEffectsConfigurationComponent;
