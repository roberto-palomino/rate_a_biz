//Parametros a editar en review
// id
// idBusiness_states
// idUser
// idJobs
// idSalaries
// start_year
// end_year
// salary
// enviroment
// conciliation
// oportunities
// title
// description
// createdAt
// modifiedAtf
// idBusiness

import React, { useContext, useState } from 'react';
import EditUser from '../components/EditUser';
import useUserData from '../hooks/useUserData';
import useBusinessData from '../hooks/useBusinessData';
import { TokenContext } from '../index';
import './Review.css';

export const Review = () => {
const [hasUpdated, setHasUpdated] = useState(false);
const [token] = useContext(TokenContext);
const { user, userId, userRole } = useUserData(token, hasUpdated);
const { business } = useBusinessData(token, hasUpdated);

return (

<div>
<EditUser
        user={user}
        userId={userId}
        onUpdated={setHasUpdated}
        userRole={userRole}
        business={business}
      />
</div>
);
};

La home actual:

import './App.css';

import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { TokenContext } from '.';
import { TopBusiness } from './components/TopBusiness';
import Header from './components/Header/Header';

function App() {
const [token] = useContext(TokenContext);
let activeStyle = {
color: 'green',
};
return (
<div className='App'>
{/_ <Header /> _/}
<h1 className='top10'>TOP 10 Empresas mejor valoradas de España</h1>
<div className='top-reviews'>
<TopBusiness className='top-preview' />
</div>
</div>
);
}

export default App;
