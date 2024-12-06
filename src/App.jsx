import './App.css'; 
import Navbar from './Componnets/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Componnets/Pages/ShopCategory';
import LoginSignup from './Componnets/Pages/LoginSignup';
import Shop from './Componnets/Pages/Shop';
import Product from './Componnets/Pages/Product';
import Cart from './Componnets/Pages/Cart';
import men_banner from './Componnets/Assets/banner_mens.png';
import women_banner from './Componnets/Assets/banner_women.png';
import kid_banner from './Componnets/Assets/banner_kids.png';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
