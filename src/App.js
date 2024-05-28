import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebars from './components/Sidebars';
import Home from './pages/Home';
import Products from './pages/Products';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import './index.css'; // Import Tailwind CSS

function App() {
  return (
    <div className="App flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 min-h-screen">
        <Sidebars />
        <div className="content flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
