import { useNavigate } from 'react-router-dom';
import * as donutsAPI from '../../utilities/donuts-api';
import DonutCard from "../../components/DonutCard/DonutCard";
import './DonutsListPage.css';

export default function DonutsListPage({ donuts, setDonuts, user }) {
  const navigate = useNavigate();

  async function handleUpdateDonut(donutFormData, donutId) {
    await donutsAPI.updateDonut(donutFormData, donutId);
    const updatedDonuts = await donutsAPI.index();
    setDonuts(updatedDonuts);
    navigate(`/donuts/${donutId}`);
  }

  async function handleDeleteDonut(id) {
    await donutsAPI.deleteDonut(id);
    const remainingDonuts = donuts.filter(donut => donut._id !== id);
    setDonuts(remainingDonuts);
  }

  return (
    <>
      <h1>Donuts List</h1>
      <div>
        {donuts.map((d, idx) => {
          return <DonutCard donut={d} key={idx} handleUpdateDonut={handleUpdateDonut} handleDeleteDonut={handleDeleteDonut} user={user} />;
        })}
      </div>
    </>
  );
}