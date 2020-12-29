import { useDispatch, useSelector } from 'react-redux';
import { userSignOut, booksReset } from '../redux';
import Profile from '../components/Profile';

const ProfileContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const handleClick = () => {
    localStorage.removeItem('token');
    dispatch(booksReset());
    dispatch(userSignOut());
  };

  return <Profile handleClick={handleClick} user={user} />;
};

export default ProfileContainer;
