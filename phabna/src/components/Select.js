import React, { useState } from 'react';
import '../assets/styles/select.css'
const Select = ({ options, onSelect, placeholder, defaultValue, }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option); // Pass selected option back to parent component
  };

  return (
    <div className="custom-select">
      <div className={selectedOption ? "selected-option" : "placeholder"} onClick={toggleSelect}>
        {selectedOption ? selectedOption.label : placeholder}
      </div>
      {isOpen && (
        <ul className="options">
          {options.map((option) => (
            <li key={option.value} onClick={() => handleSelectOption(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
