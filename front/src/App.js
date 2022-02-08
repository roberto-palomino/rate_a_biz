import './App.css';
import { useState } from 'react';
import { SelectState } from './components/SelectState';
import { SelectJob } from './components/SelectJob';
import { SelectSalary } from './components/SelectSalary';

function App() {
  const [selectedState, setSelectedState] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedSalary, setSelectedSalary] = useState(null);

  return (
    <div className='App'>
      <SelectState setSelectedState={setSelectedState} />
      <SelectJob setSelectedJob={setSelectedJob} />
      <SelectSalary setSelectedSalary={setSelectedSalary} />
    </div>
  );
}

export default App;
