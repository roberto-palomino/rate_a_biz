import React, { useContext, useState } from 'react';
import useUserData from '../hooks/useUserData';
import useBusinessData from '../hooks/useBusinessData';
import { TokenContext } from '../index';
import './Review.css';
import HalfRatingEditable
rom '../components/Reviews/HalfRatingEditable';
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
export default Review;
