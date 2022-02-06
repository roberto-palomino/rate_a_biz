import { useLoadStates } from '../hooks/useLoadStates';

export const SelectState = (props) => {
  const [states] = useLoadStates();
  const { setSelectedState } = props;
  const selectChange = (e) => {
    console.log('selected author', e);
    setSelectedState(e.target.value);
  };

  return (
    <>
      {states ? (
        <select name='select' onChange={selectChange}>
          <option value={''}> Seleccionar una provincia</option>
          {states.map((state) => (
            <option key={state.id} value={state.id}>
              {state.name}
            </option>
          ))}
        </select>
      ) : null}
    </>
  );
};
