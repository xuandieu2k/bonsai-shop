import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../features/home/page/home-page';
import ShopPage from '../features/shop/page/shop-page';
import DetailProductPage from '../features/detail-product/page/detaill-product-page';
import CartPage from '../features/cart/page/cart-page';
import CheckoutPage from '../features/checkout/page/checkout-page';
import { ModuleConstants } from './constants/module-constants';
import AdminPage from '../features/admin/page/admin-page';

const RouteApp = () => (
  <Routes>
    <Route path={ModuleConstants.HOME} element={<HomePage />} />
    <Route path={ModuleConstants.SHOP} element={<ShopPage />} />
    <Route path={ModuleConstants.DETAIL_PRODUCT} element={<DetailProductPage />} />
    <Route path={ModuleConstants.CART} element={<CartPage />} />
    <Route path={ModuleConstants.CHECKOUT} element={<CheckoutPage />} />
    <Route path={ModuleConstants.ADMIN} element={<AdminPage />} />
  </Routes>
);

export default RouteApp;