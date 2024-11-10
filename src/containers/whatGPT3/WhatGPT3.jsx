import React from 'react';
import './whatGPT3.css';
import AnalogJoystick from '../../components/analog/AnalogJoystick';

const WhatGPT3 = () => {
  const handleMove = (movementData) => {
    console.log('Movement:', movementData);
};
  return (
    <div className="gpt3__whatgpt3 centered section__margin" id="wgpt3">
              <div>
            <AnalogJoystick onMove={handleMove} />
        </div>
      <div className="gpt3__whatgpt3-container">
      <button type="button">Seed</button>
      <button type="button">Water</button>
      <button type="button">Drill</button>
      <button type="button">Pitchfork</button>
      </div>
    </div>
  );
};


export default WhatGPT3;
