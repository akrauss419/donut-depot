import { checkToken } from '../../utilities/users-service';
import DonutCard from "../../components/DonutCard/DonutCard";
import './DonutsListPage.css';

export default function DonutsListPage({ donuts, handleUpdateDonut, handleDeleteDonut, user }) {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }
  
  return (
    <>
      <h1>Donuts List</h1>
      <div>
        {donuts.length ? donuts.map((d, idx) => {
          return <DonutCard donut={d} key={idx} handleUpdateDonut={handleUpdateDonut} handleDeleteDonut={handleDeleteDonut} />
        }) : (<h2>No Donuts Yet</h2>)}
      </div>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}