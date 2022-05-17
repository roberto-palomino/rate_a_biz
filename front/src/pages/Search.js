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
import { NameSearch } from '../components/Search/NameSearch';

function Search() {
  const [filterVisible, setFilterVisible] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedJob, setSelectedJob] = useState('');
  const [selectedSalary, setSelectedSalary] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderBy, setOrderBy] = useState('');
  const [name, setName] = useState('');

  const [filterBusiness, setFilterBusiness] = useState('');

  console.log('filter en search', filterBusiness);

  return (
    <>
      {/* <Header /> */}
      <div className='search'>
        <div className='filter'>
          {filterVisible ? (
            <>
              <div className='filters'>
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
              </div>
            </>
          ) : null}
          <div className='searching'>
            <NameSearch name={name} setName={setName} />
            <ApplyButton
              selectedState={selectedState}
              selectedJob={selectedJob}
              selectedSalary={selectedSalary}
              selectedSector={selectedSector}
              orderBy={orderBy}
              direction={selectedOrder}
              name={name}
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
              setName={setName}
            />

            <FilterButton
              className='button'
              filterVisible={filterVisible}
              setFilterVisible={setFilterVisible}
            />
          </div>
          {filterVisible ? (
            <>
              <div className='orders'>
                <OrderBy
                  className='button'
                  orderBy={orderBy}
                  setOrderBy={setOrderBy}
                />
                <Order setSelectedOrder={setSelectedOrder} />
              </div>
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
