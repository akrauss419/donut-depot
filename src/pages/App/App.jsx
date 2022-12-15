import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import DonutsListPage from '../DonutsListPage/DonutsListPage';
import DonutDetailPage from '../DonutDetailPage/DonutDetailPage';
import NewDonutPage from '../NewDonutPage/NewDonutPage';
import ShopsListPage from '../ShopsListPage/ShopsListPage';
import ShopDetailPage from '../ShopDetailPage/ShopDetailPage';
import NewShopPage from '../NewShopPage/NewShopPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/donuts" element={<DonutsListPage />} />
            <Route path="/donuts/:donutFlavor" element={<DonutDetailPage />} />
            <Route path="/donuts/new" element={<NewDonutPage />} />
            <Route path="/shops" element={<ShopsListPage />} />
            <Route path="/shops/:shopName" element={<ShopDetailPage />} />
            <Route path="/shops/new" element={<NewShopPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
