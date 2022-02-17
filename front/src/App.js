import './App.css';

import { NavLink } from 'react-router-dom';

function App() {
  let activeStyle = {
    color: 'green',
  };
  return (
    <div className='App'>
      <nav>
        <NavLink
          to='/signup'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className='underline'
        >
          Registrarse
        </NavLink>{' '}
        |
        <NavLink
          to='/search'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className='underline'
        >
          Buscar
        </NavLink>
      </nav>
    </div>
  );
}

export default App;
