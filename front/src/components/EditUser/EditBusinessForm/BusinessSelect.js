import React from 'react';

const BusinessSelect = props => {
  const { selectItem, setSelectItem, disabled, options, inputId, label } =
    props;
  const alignLabel = 'align-label';
  const sectorChange = e => {
    setSelectItem(e.target.value);
  };
  return (
    <div className={alignLabel}>
      <label htmlFor={inputId}>{label}</label>
      <select
        id={inputId}
        disabled={disabled}
        value={selectItem}
        onChange={sectorChange}
      >
        {options}
      </select>
    </div>
  );
};

export default BusinessSelect;
