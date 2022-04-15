import './Search.css';
import { useState } from 'react';
import FilterButton from '../components/FilterButton';
import { Order } from '../components/Order';
import { OrderBy } from '../components/OrderBy';
import { SelectJob } from '../components/SelectJob';
import { SelectOrder } from '../components/SelectOrder';
import { SelectSalary } from '../components/SelectSalary';
import { SelectSector } from '../components/SelectSector';
import { SelectState } from '../components/SelectState';
import { BusinessPreview } from './BusinesPreview';
import ApplyButton from '../components/ApplyButton';

function Search() {
  const [filterVisible, setFilterVisible] = useState('');
  const [selectedState, setSelectedState] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedSalary, setSelectedSalary] = useState(null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderBy, setOrderBy] = useState(null);

  const [filterBusiness, setFilterBusiness] = useState('');
  console.log(selectedOrder);

  console.log('trabajo', selectedJob);

  console.log('estado', selectedState);
  console.log('salario', selectedSalary);
  console.log('orden', orderBy);
  return (
    <div className='search'>
      <div className='filter'>
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
            <ApplyButton
              selectedState={selectedState}
              selectedJob={selectedJob}
              selectedSalary={selectedSalary}
              selectedSector={selectedSector}
              orderBy={orderBy}
              direction={selectedOrder}
              filterBusiness={filterBusiness}
              setFilterBusiness={setFilterBusiness}
            />
          </>
        ) : null}

        <SelectOrder setSelectedOrder={setSelectedOrder} />
        <OrderBy setOrderBy={setOrderBy} />
        <Order setSelectedOrder={setSelectedOrder} />
      </div>
      <div className='reviews'>
        <BusinessPreview className='preview' filterBusiness={filterBusiness} />
      </div>
    </div>
  );
}

export default Search;
