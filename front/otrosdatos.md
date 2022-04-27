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
// modifiedAt

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
