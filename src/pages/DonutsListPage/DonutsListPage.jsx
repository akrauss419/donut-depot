import { checkToken } from '../../utilities/users-service';
import DonutCard from "../../components/DonutCard/DonutCard";
import './DonutsListPage.css';

export default function DonutsListPage({ donuts, handleDeleteDonut, user }) {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }
  
  return (
    <>
      <h1>Donuts List</h1>
      <div>
        {donuts.map((d, idx) => {
          return <DonutCard donut={d} key={idx} handleDeleteDonut={handleDeleteDonut} />;
        })}
      </div>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}