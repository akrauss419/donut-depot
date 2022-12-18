import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as donutsAPI from '../../utilities/donuts-api';
import * as shopsAPI from '../../utilities/shops-api';
import AuthPage from '../AuthPage/AuthPage';
import DonutsListPage from '../DonutsListPage/DonutsListPage';
import DonutDetailPage from '../DonutDetailPage/DonutDetailPage';
import NewDonutPage from '../NewDonutPage/NewDonutPage';
import ShopsListPage from '../ShopsListPage/ShopsListPage';
import ShopDetailPage from '../ShopDetailPage/ShopDetailPage';
import NewShopPage from '../NewShopPage/NewShopPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [donuts, setDonuts] = useState([]);
  const [shops, setShops] = useState([]);
  const [comments, setComments] = useState([]);
  const [reviews, setReviews] = useState([]);

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
    const newDonut = await donutsAPI.create(donut);
    setDonuts([...donuts, newDonut]);
  }

  async function addComment(comment, donut) {
    const newComment = await donutsAPI.createComment(comment, donut);
    setComments([...comments, newComment]);
  }
  
  async function addShop(shop) {
    const newShop = await shopsAPI.create(shop);
    setShops([...shops, newShop]);
  }
  
  async function addReview(review, shop) {
    const newReview = await shopsAPI.createReview(review, shop);
    setReviews([...reviews, newReview]);
  }

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/donuts" element={<DonutsListPage donuts={donuts} />} />
            <Route path="/donuts/:donutFlavor" element={<DonutDetailPage donuts={donuts} comments={comments} addComment={addComment} />} />
            <Route path="/donuts/new" element={<NewDonutPage donuts={donuts} addDonut={addDonut} />} />
            <Route path="/shops" element={<ShopsListPage shops={shops} />} />
            <Route path="/shops/:shopName" element={<ShopDetailPage shops={shops} reveiws={reviews} addReview={addReview} />} />
            <Route path="/shops/new" element={<NewShopPage shops={shops} addShop={addShop} />} />
            <Route path="/profile" element={<ProfilePage user={user} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
