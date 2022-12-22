import DonutCard from '../../components/DonutCard/DonutCard';
import './ProfilePage.css';

export default function ProfilePage({ user, donuts, handleUpdateDonut, handleDeleteDonut }) {
  return(
    <>
      <div className="ProfileHeadline">
        <h1>Pr</h1><h3 className="DonutEmoji">🍩</h3><h1>file Page</h1>
      </div>
      <div className="ProfileContainer">
        <div className="ProfileInfo">
          <h1>Username: {user.name}</h1>
          <h2>Email: {user.email}</h2>
        </div>
      </div>
      <div className="ProfileHeadline">
        <h1>My D</h1><h3 className="DonutEmoji">🍩</h3><h1>nut B</h1><h3 className="DonutEmoji">🍩</h3><h1>x</h1>
      </div>
      <div className="DonutBox">
        {donuts.filter(donut => donut.user === user._id).map((d, idx) => {
          return <DonutCard donut={d} key={idx} handleUpdateDonut={handleUpdateDonut} handleDeleteDonut={handleDeleteDonut} user={user} />
        })}
      </div>
    </>
  );
}