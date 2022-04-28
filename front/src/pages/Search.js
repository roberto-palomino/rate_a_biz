import './Search.css';
import { useState } from 'react';
import FilterButton from '../components/FilterButton';
import { Order } from '../components/Order';
import { OrderBy } from '../components/OrderBy';
import { SelectJob } from '../components/SelectJob';
import { SelectSalary } from '../components/SelectSalary';
import { SelectSector } from '../components/SelectSector';
import { SelectState } from '../components/SelectState';
import { BusinessPreview } from './BusinessPreview';
import ApplyButton from '../components/ApplyButton';

import ResetButton from '../components/ResetButton';

function Search() {
  const [filterVisible, setFilterVisible] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedJob, setSelectedJob] = useState('');
  const [selectedSalary, setSelectedSalary] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderBy, setOrderBy] = useState('');

  const [filterBusiness, setFilterBusiness] = useState('');

  return (
    <>
      {/* <Header /> */}
      <div className='search'>
        <div className='filter'>
          <FilterButton
            className='button'
            filterVisible={filterVisible}
            setFilterVisible={setFilterVisible}
          />
          {filterVisible ? (
            <>
              {' '}
              <SelectState
                className='select'
                selectedState={selectedState}
                setSelectedState={setSelectedState}
              />
              <SelectJob
                selectedJob={selectedJob}
                setSelectedJob={setSelectedJob}
              />
              <SelectSalary
                selectedSalary={selectedSalary}
                setSelectedSalary={setSelectedSalary}
              />
              <SelectSector
                selectedSector={selectedSector}
                setSelectedSector={setSelectedSector}
              />
              <OrderBy
                className='button'
                orderBy={orderBy}
                setOrderBy={setOrderBy}
              />
              <Order setSelectedOrder={setSelectedOrder} />
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
              <ResetButton
                setSelectedState={setSelectedState}
                setSelectedJob={setSelectedJob}
                setSelectedSalary={setSelectedSalary}
                setSelectedSector={setSelectedSector}
                setOrderBy={setOrderBy}
                setSelectedOrder={setSelectedOrder}
                setFilterBusiness={setFilterBusiness}
              />
            </>
          ) : null}

          {/* <SelectOrder setSelectedOrder={setSelectedOrder} /> */}
        </div>
        <div className='reviews'>
          <BusinessPreview
            className='preview'
            filterBusiness={filterBusiness}
          />
        </div>
      </div>
    </>
  );
}

export default Search;
