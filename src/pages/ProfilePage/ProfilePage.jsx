import * as donutsAPI from '../../utilities/donuts-api';
import './ProfilePage.css';

export default function ProfilePage({ user, donuts, setDonuts }) {
  const myDonutBox = donuts.filter((donut, userId) => donut.user === userId);
  
  return(
    <>
      <h1>Profile Page</h1>
      <div>
        <h4>Username: {user.name}</h4>
        <h5>Email: {user.email}</h5>
      </div>
      <div>
        <h2>My Donut Box</h2>
        <div>
          {myDonutBox}
        </div>
      </div>
    </>
  );
}