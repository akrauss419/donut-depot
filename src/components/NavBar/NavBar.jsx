import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/donuts">All Donuts</Link>
      &nbsp; | &nbsp;
      <Link to="/donuts/new">Add a Donut</Link>
      &nbsp; | &nbsp;
      <Link to="/shops">Donut Shops</Link>
      &nbsp;&nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}