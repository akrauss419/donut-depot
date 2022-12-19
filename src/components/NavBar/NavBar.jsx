import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/donuts">Donut Case</Link>
      &nbsp; 🍩 &nbsp;
      <Link to="/donuts/new">Add a Donut</Link>
      &nbsp; | &nbsp;
      <Link to="/shops">Donut Shops</Link>
      &nbsp; 🏬 &nbsp;
      <Link to="/shops/new">Add a Shop</Link>
      &nbsp;&nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;
      <Link to="/profile">My Donut Box</Link>
      &nbsp; 😋 &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}