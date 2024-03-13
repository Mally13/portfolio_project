import {React, useState} from 'react'
import Radio from './Radio'
import '../assets/styles/flight.css'
import Select from './Select'

function FlightSearch() {
  const [selectedValue, setSelectedValue] = useState(null);

  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];

  const handleSelect = (option) => {
    setSelectedValue(option);
  };
  return (
    <div className='flight-wrapper'>
        <div className='flight-type'>
            <Radio/>
        </div>
        <div className='flight-search'>
            <div className='from'>
              <h4>Flying From</h4>
              <Select options={options} onSelect={handleSelect} placeholder="City or Specific Airport" defaultValue={null} />
              <p>{selectedValue ? selectedValue.label : ''}</p>
            </div>
            <div className='to'>
              <h4>Flying To</h4>
              <Select options={options} onSelect={handleSelect} placeholder="City or Specific Airport" defaultValue={null} />
              <p>{selectedValue ? selectedValue.label : ''}</p>
            </div>
            <div className='depart'>
              <h4>Depart Date</h4>
              <Select options={options} onSelect={handleSelect} placeholder="Departure Date" defaultValue={null} />
              <p>{selectedValue ? selectedValue.label : ''}</p>
            </div>
            <div className='return-d'>
              <h4>Return Date</h4>
              <Select options={options} onSelect={handleSelect} placeholder="Return Date" defaultValue={null} />
              <p>{selectedValue ? selectedValue.label : ''}</p>
            </div>
            <div className='travellers'>
              <h4>Travellers & Class</h4>
              <Select options={options} onSelect={handleSelect} placeholder="1 Traveller" defaultValue={{label:"1 Traveller"}} />
              <p>{selectedValue ? selectedValue.label : 'Economy'}</p>
            </div>
            <div className='search'>

            </div>
        </div>
        
    </div>
  )
}

export default FlightSearch