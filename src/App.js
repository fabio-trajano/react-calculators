import Calculator1 from './Calculator1';
import Calculator2 from './Calculator2';
import './App.css';


function App() {
  return (
    <div>
      <div>
        <h1>Calculators:</h1>
      </div>
      <div className='calc1'>
        <Calculator1 />
      </div>
      <div className='calc2'>
        <Calculator2/>
      </div>
    </div>
  );
}

export default App;
