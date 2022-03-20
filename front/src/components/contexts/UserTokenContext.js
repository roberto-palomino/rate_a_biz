import React, { useContext } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const TokenContext = React.createContext();
const TokenProvider = (props) => {
  const [token, setToken] = useLocalStorage('token');
  return (
    <TokenContext.Provider value={[token, setToken]}>
      {props.children}
    </TokenContext.Provider>
  );
};

const useTokenContext = () => {
  return useContext(TokenContext);
};

export { TokenContext, TokenProvider, useTokenContext };
