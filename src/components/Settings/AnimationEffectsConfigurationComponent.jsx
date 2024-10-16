import React from 'react';

const AnimationEffectsConfigurationComponent = () => {
  return (
    <div className="flex justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-4 w-full">
        <h2 className="text-lg font-semibold mb-4">Animation Effects Configuration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Block */}
          <div className="flex flex-col">
            <label className="mb-2 block text-black font-bold " htmlFor="animationEffect1">Select Animation Effect 1</label>
            <select
              id="animationEffect1"
              className="border border-gray-300 rounded-lg p-2"
            >
              <option value="">Choose an effect</option>
              <option value="pulse">Pulse</option>
              <option value="fadeIn">Fade In</option>
              <option value="bounce">Bounce</option>
              <option value="slide">Slide</option>
            </select>
            <p className="mb-2 ml-1 text-sm font-medium">Set animation effect for top menu</p>
          </div>

          {/* Second Block */}
          <div className="flex flex-col">
            <label className="mb-2 block text-black font-bold " htmlFor="animationEffect1">Select Animation Effect 1</label>

            <select
              id="animationEffect2"
              className="border border-gray-300 rounded-lg p-2"
            >
              <option value="">Choose an effect</option>
              <option value="pulse">Pulse</option>
              <option value="fadeIn">Fade In</option>
              <option value="bounce">Bounce</option>
              <option value="slide">Slide</option>
            </select>
            <p className="mb-2 ml-1 text-sm font-medium">Set animation effect for Modal</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationEffectsConfigurationComponent;
