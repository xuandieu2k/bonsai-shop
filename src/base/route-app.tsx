import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../features/home/page/home-page';
import ShopPage from '../features/shop/page/shop-page';
import DetailProductPage from '../features/detail-product/page/detaill-product-page';
import CartPage from '../features/cart/page/cart-page';
import CheckoutPage from '../features/checkout/page/checkout-page';
// import ShopPage from './ShopPage';
// import ProductDetailsPage from './ProductDetailsPage';
// import CartPage from './CartPage';
// import CheckoutPage from './CheckoutPage';

const RouteApp = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/shop" element={<ShopPage />} />
    <Route path="/product-details" element={<DetailProductPage />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="/checkout" element={<CheckoutPage />} />
  </Routes>
);

export default RouteApp;