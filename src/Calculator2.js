import { useState } from 'react';
import "./Calculators.css";

function Calculator2() {
  const [value, setValue] = useState('');

  const handleClick = (event) => {
    setValue(value + event.target.value);
  };

  const handleCalculate = () => {
    const result = eval(value);
    setValue(result.toString());
  }
  const handleClear = () => {
    setValue('');
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="calculator">
      <div>
        <h1>Improved Calculator</h1>
      </div>
      <div>
        <input type="text" value={value} onChange={handleInputChange} />
      </div>
      <div className="buttons-calc2">
        <button className='btn-red' onClick={() => setValue('')}>Clear</button>
        <button className='btn-red' onClick={handleClear}>C</button>
        <button value="+" onClick={handleClick}>+</button>
        <button value="-" onClick={handleClick}>-</button>
        <button value="*" onClick={handleClick}>*</button>
        <button value="/" onClick={handleClick}>/</button>
        <button value="7" onClick={handleClick}>7</button>
        <button value="8" onClick={handleClick}>8</button>
        <button value="9" onClick={handleClick}>9</button>
        <button value="4" onClick={handleClick}>4</button>
        <button value="5" onClick={handleClick}>5</button>
        <button value="6" onClick={handleClick}>6</button>
        <button value="1" onClick={handleClick}>1</button>
        <button value="2" onClick={handleClick}>2</button>
        <button value="3" onClick={handleClick}>3</button>
        <button value="0" onClick={handleClick}>0</button>
        <button value="." onClick={handleClick}>.</button>
        <button className='btn-green' onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
}

export default Calculator2;
