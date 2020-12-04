import { useDispatch, useSelector } from 'react-redux';
import { userSignOut, booksReset } from '../redux';
import Navbar from '../components/Navbar';

const NavbarContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const handleClick = () => {
    localStorage.removeItem('token');
    dispatch(booksReset());
    dispatch(userSignOut());
  };

  return <Navbar handleClick={handleClick} user={user} />;
};

export default NavbarContainer;
