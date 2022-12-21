import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as donutsAPI from '../../utilities/donuts-api';
import * as shopsAPI from '../../utilities/shops-api';
import AuthPage from '../AuthPage/AuthPage';
import DonutsListPage from '../DonutsListPage/DonutsListPage';
import NewDonutPage from '../NewDonutPage/NewDonutPage';
import DonutDetailPage from '../DonutDetailPage/DonutDetailPage';
import UpdateDonutPage from '../UpdateDonutPage/UpdateDonutPage';
import UpdateCommentPage from '../UpdateCommentPage/UpdateCommentPage';
import ShopsListPage from '../ShopsListPage/ShopsListPage';
import NewShopPage from '../NewShopPage/NewShopPage';
import ShopDetailPage from '../ShopDetailPage/ShopDetailPage';
import UpdateShopPage from '../UpdateShopPage/UpdateShopPage';
import UpdateReviewPage from '../UpdateReviewPage/UpdateReviewPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [donuts, setDonuts] = useState([]);
  const [shops, setShops] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fillDonutCase() {
      const donuts = await donutsAPI.index();
      setDonuts(donuts);
    }
    fillDonutCase();
  }, []);

  useEffect(() => {
    async function openShops() {
      const shops = await shopsAPI.index();
      setShops(shops);
    }
    openShops();
  }, []);

  async function addDonut(donut) {
    const allDonuts = await donutsAPI.create(donut);
    setDonuts(allDonuts);
  }

  async function addShop(shop) {
    const allShops = await shopsAPI.create(shop);
    setShops(allShops);
  }

  async function myDonuts(id) {
    await donutsAPI.index(id);
    const myDonutBox = donuts.filter(donut => donut.user === id);
    setDonuts(myDonutBox);
  }

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/donuts" element={<DonutsListPage donuts={donuts} setDonuts={setDonuts} />} />
            <Route path="/donuts/new" element={<NewDonutPage donuts={donuts} addDonut={addDonut} />} />
            <Route path="/donuts/:donutId" element={<DonutDetailPage donuts={donuts} setDonuts={setDonuts} user={user} />} />
            <Route path="/donuts/:donutId/update" element={<UpdateDonutPage donuts={donuts} setDonuts={setDonuts} />} />
            <Route path="/comments/:id/update" element={<UpdateCommentPage />} />
            <Route path="/shops" element={<ShopsListPage shops={shops} setShops={setShops} />} />
            <Route path="/shops/new" element={<NewShopPage shops={shops} addShop={addShop} />} />
            <Route path="/shops/:shopId" element={<ShopDetailPage shops={shops} setShops={setShops} user={user} />} />
            <Route path="/shops/:shopId/update" element={<UpdateShopPage shops={shops} setShops={setShops} />} />
            <Route path="/reviews/:id/update" element={<UpdateReviewPage />} />
            <Route path="/profile" element={<ProfilePage user={user} donuts={donuts} myDonuts={myDonuts} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
