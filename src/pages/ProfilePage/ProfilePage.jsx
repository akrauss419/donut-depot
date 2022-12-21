import DonutCard from '../../components/DonutCard/DonutCard';
import './ProfilePage.css';

export default function ProfilePage({ user, donuts, handleUpdateDonut, handleDeleteDonut }) {
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
          {donuts.filter(donut => donut.user === user._id).map((d, idx) => {
            return <DonutCard donut={d} key={idx} handleUpdateDonut={handleUpdateDonut} handleDeleteDonut={handleDeleteDonut} user={user} />
          })}
        </div>
      </div>
    </>
  );
}