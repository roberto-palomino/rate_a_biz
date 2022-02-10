import './App.css';
import { useState } from 'react';
import { SelectState } from './components/SelectState';
import { SelectJob } from './components/SelectJob';
import { SelectSalary } from './components/SelectSalary';
import { SelectSector } from './components/SelectSector';
import { SelectOrder } from './components/SelectOrder';
import { OrderBy } from './components/OrderBy';
import FilterButton from './components/FilterButton';
import { Order } from './components/Order';

function App() {
  const [filterVisible, setFilterVisible] = useState('');
  const [selectedState, setSelectedState] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedSalary, setSelectedSalary] = useState(null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderBy, setOrderBy] = useState(null);
  console.log(selectedOrder);
  return (
    <div className='App'>
      <FilterButton
        filterVisible={filterVisible}
        setFilterVisible={setFilterVisible}
      />
      {filterVisible ? (
        <>
          {' '}
          <SelectState setSelectedState={setSelectedState} />
          <SelectJob setSelectedJob={setSelectedJob} />
          <SelectSalary setSelectedSalary={setSelectedSalary} />
          <SelectSector setSelectedSector={setSelectedSector} />
        </>
      ) : null}

      <SelectOrder setSelectedOrder={setSelectedOrder} />
      <OrderBy setOrderBy={setOrderBy} />
      <Order setSelectedOrder={setSelectedOrder} />
    </div>
  );
}

export default App;
