import Avatar from '../Avatar';

export const Profile = (props) => {
  const { businessName, headquarter, description, sector, url, avatar } = props;
  const avatarUrl = avatar
    ? `http://localhost:4000/static/uploads/${avatar}`
    : '';

  return (
    <>
      <div className='info'>
        <h3> {businessName} </h3>
        <Avatar size='medium' hideFigCaption avatarUrl={avatarUrl} />

        <h4> Sede principal: {headquarter} </h4>
        <h4> {sector}</h4>
        <h4> {url}</h4>
        <h5> {description}</h5>
      </div>
    </>
  );
};
