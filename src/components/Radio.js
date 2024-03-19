import React, { useState } from 'react';
import '../assets/styles/radio.css';

function Radio() {
  const [selectedOption, setSelectedOption] = useState("return");
  const selected = "#FECE48"
  const unselected = "#FFFFFF"


  const handleOptionChange = (value) => {
    setSelectedOption(value);
    console.log(value)
  };

  return (
    <div className="custom-radio">
      <label style={{backgroundColor:selectedOption === "return" ? selected :unselected}}>
        <input
          type="radio"
          value="return"
          checked={selectedOption === "return"}
          onChange={() => handleOptionChange("return")}
        />
        Return
      </label>
      <label style={{backgroundColor:selectedOption === "oneway" ? selected :unselected}}>
        <input
          type="radio"
          value="oneway"
          checked={selectedOption === "oneway"}
          onChange={() => handleOptionChange("oneway")}
        />
        One Way
      </label>
    </div>
  );
}

export default Radio;
