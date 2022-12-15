import { checkToken } from '../../utilities/users-service';
import DonutCard from "../../components/DonutCard/DonutCard";

export default function DonutsListPage({ donuts }) {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }
  
  return (
    <>
      <h1>Donuts List</h1>
      <div>
        <h1>Donut Info</h1>
        <div>
          {donuts.map((d, idx) => {
            return <DonutCard donut={d} key={d.flavor} />;
          })}
        </div>
      </div>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}