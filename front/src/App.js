import './App.css';
import { useState } from 'react';
import { SelectState } from './components/SelectState';

function App() {
  const [selectedState, setSelectedState] = useState(null);

  return (
    <div className='App'>
      <SelectState setSelectedState={setSelectedState} />
    </div>
  );
}

export default App;
