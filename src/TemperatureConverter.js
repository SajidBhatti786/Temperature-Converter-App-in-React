import React, { useRef, useState } from 'react';
import './TemperatureConverter.css';

const TemperatureConverter = () => {
  const inputRef = useRef(null);
  const unitRef = useRef(null);
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('celsius');

  const convertTemperature = () => {
    const inputValue = parseFloat(inputRef.current.value);
    const selectedUnit = unitRef.current.value;

    if (!isNaN(inputValue)) {
      if (selectedUnit === 'celsius') {
        const convertedTemperature = (inputValue * 9) / 5 + 32;
        setTemperature(convertedTemperature.toFixed(2));
        setUnit('Fahrenheit');
      } else if (selectedUnit === 'fahrenheit') {
        const convertedTemperature = ((inputValue - 32) * 5) / 9;
        setTemperature(convertedTemperature.toFixed(2));
        setUnit('Celsius');
      }
    }
  };

  return (
    <div className="temperature_converter">
      <div className="temperature_converter-content">
        <h2>Temperature Converter</h2>
        <div className="row">
          <div className="input">
            <p>Degrees</p>
            <input type="number" name="degree" placeholder="0" min={0} ref={inputRef} />
          </div>
          <div className="input">
            <p>Type</p>
            <select className="dropdown" ref={unitRef}>
              <option value="celsius">Celsius</option>
              <option value="fahrenheit">Fahrenheit</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input">
            <button className="button" onClick={convertTemperature}>Convert</button>
          </div>
        </div>
        <div className="row">
          <div className="converted">
            <p>Result</p>
            <h1>{temperature} {unit}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureConverter;
