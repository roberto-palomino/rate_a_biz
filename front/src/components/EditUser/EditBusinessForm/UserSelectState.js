import React from 'react';
import { useLoadStates } from '../../../hooks/useLoadStates';

const UserSelectState = props => {
  const [states] = useLoadStates();
  const { selectState, setStateValue, isEditing } = props;
  const stateChange = e => {
    setStateValue(e.target.value);
  };
  return (
    <div>
      <label htmlFor='state'>Sede</label>
      <select
        id='state'
        // disabled={!isEditing}
        value={selectState}
        onChange={stateChange}
      >
        {states.map(state => (
          <option key={state.id} value={state.nameState}>
            {state.nameState}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserSelectState;
