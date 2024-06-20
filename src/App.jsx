import React from 'react';
import {Route ,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
// import SingleProductPage from './components/SingleProductPage';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        {/* <Route path="/single-product-page/:id" element={<SingleProductPage />}></Route> */}
      </Routes>
    </div>
  )
}

export default App
