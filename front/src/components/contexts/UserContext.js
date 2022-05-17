import React, { useContext, useState } from 'react';

const UserContext = React.createContext();
const UserProvider = props => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserContext, UserProvider, useUserContext };
