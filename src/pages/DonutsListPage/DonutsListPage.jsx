import { checkToken } from '../../utilities/users-service';

export default function DonutsListPage() {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }
  
  return (
    <>
      <h1>Donuts List</h1>
      <div>
        <img src=""></img>
        <div>Donut Info</div>
      </div>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}