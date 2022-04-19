import React from 'react';
import './Avatar.css';
import avatarLogo from '../../assets/images/default-avatar.jpeg';

// const Avatar = props => {
//   const { avatarUrl, username, size, hideFigCaption } = props;
//   return (
//     <div className='avatar-container'>
//       <div className={`avatar ${size === 'medium' ? 'medium' : 'small'}`}>
//         <img
//           className='image-avatar'
//           src={avatarUrl ? avatarUrl : avatarLogo}
//           alt={`avatar de ${username || 'usuario'}`}
//         />
//       </div>
//       {!hideFigCaption && (
//         <figcaption className='avatar-username'>{`${
//           username || 'usuario'
//         }`}</figcaption>
//       )}
//     </div>
//   );
// };
// export default Avatar;
const Avatar = props => {
  const { avatarUrl, username, size, figcaption } = props;
  return (
    <>
      <div className={`avatar ${size === 'medium' ? 'medium' : 'small'}`}>
        <img
          className='image-avatar'
          src={avatarUrl ? avatarUrl : avatarLogo}
          alt={`avatar de ${username || 'usuario'}`}
        />
      </div>
      {figcaption ? (
        <figcaption className='avatar-username'>{`${
          username || 'usuario'
        }`}</figcaption>
      ) : null}
    </>
  );
};
export default Avatar;
