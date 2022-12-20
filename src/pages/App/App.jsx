import { useState, useEffect } from 'react';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as donutsAPI from '../../utilities/donuts-api';
import * as shopsAPI from '../../utilities/shops-api';
import * as commentsAPI from '../../utilities/comments-api';
import * as reviewsAPI from '../../utilities/reviews-api';
import AuthPage from '../AuthPage/AuthPage';
import DonutsListPage from '../DonutsListPage/DonutsListPage';
import DonutDetailPage from '../DonutDetailPage/DonutDetailPage';
import UpdateDonutPage from '../UpdateDonutPage/UpdateDonutPage';
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
  const { donutId } = useParams();
  const { shopId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fillDonutCase() {
      const donuts = await donutsAPI.index();
      setDonuts(donuts);
    }
    fillDonutCase();
  }, [comments]);

  useEffect(() => {
    async function openShops() {
      const shops = await shopsAPI.index();
      setShops(shops);
    }
    openShops();
  }, [reviews]);
  
  async function addDonut(donut) {
    const newDonut = await donutsAPI.create(donut);
    setDonuts([...donuts, newDonut]);
  }

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
  
  async function addComment(comment, donut) {
    const newComment = await commentsAPI.createComment(comment, donut);
    setComments([...comments, newComment]);
  }

  async function handleDeleteComment(id) {
    await commentsAPI.deleteComment(id);
    const activeComments = comments.filter(comment => comment._id !== id);
    setComments(activeComments);
  }
  
  async function addShop(shop) {
    const newShop = await shopsAPI.create(shop);
    setShops([...shops, newShop]);
  }
  
  async function handleDeleteShop(id) {
    await shopsAPI.deleteShop(id);
    const remainingShops = shops.filter(shop => shop._id !== id);
    setShops(remainingShops);
  }

  async function addReview(review, shop) {
    const newReview = await reviewsAPI.createReview(review, shop);
    setReviews([...reviews, newReview]);
  }

  async function handleDeleteReview(id) {
    await reviewsAPI.deleteReview(id);
    const remainingReviews = reviews.filter(review => review._id !== id);
    setReviews(remainingReviews);
  }

  async function myDonuts(id) {
    await donutsAPI.index(id);
    const myDonutBox = donuts.filter(donut => donut.user === id);
    setDonuts(myDonutBox);
  }

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/donuts" element={<DonutsListPage donuts={donuts} handleDeleteDonut={handleDeleteDonut} handleUpdateDonut={handleUpdateDonut} />} />
            <Route path="/donuts/:donutId" element={<DonutDetailPage donuts={donuts} comments={comments} addComment={addComment} handleDeleteComment={handleDeleteComment} />} />
            <Route path="/donuts/:donutId/update" element={<UpdateDonutPage donuts={donuts} handleUpdateDonut={handleUpdateDonut}/>} />
            <Route path="/donuts/new" element={<NewDonutPage donuts={donuts} addDonut={addDonut} />} />
            <Route path="/shops" element={<ShopsListPage shops={shops} handleDeleteShop={handleDeleteShop} />} />
            <Route path="/shops/:shopId" element={<ShopDetailPage shops={shops} reveiws={reviews} addReview={addReview} handleDeleteReview={handleDeleteReview} />} />
            <Route path="/shops/new" element={<NewShopPage shops={shops} addShop={addShop} />} />
            <Route path="/profile" element={<ProfilePage user={user} myDonuts={myDonuts} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
