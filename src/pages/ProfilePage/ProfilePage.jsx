export default function ProfilePage({ user }) {
  return(
    <>
      <h1>Profile Page</h1>
      <div>
        <h4>Username: {user.name}</h4>
        <h5>Email: {user.email}</h5>
      </div>
      <div>
        <h2>My Donut Box</h2>
      </div>
    </>
  );
}