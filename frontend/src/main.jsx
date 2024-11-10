import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";

// Private Routes
import PrivateRoute from "./components/PrivateRoute.jsx";

// Admin Routes
import AdminRoute from "./pages/Admin/AdminRoute.jsx";
import UserList from "./pages/Admin/UserList.jsx";
import CategoryList from "./pages/Admin/CategoryList.jsx";
import ProductList from "./pages/Admin/ProductList.jsx";
import UpdateProduct from "./pages/Admin/ProductUpdate.jsx";
import AllProducts from "./pages/Admin/AllProducts.jsx";
import OrderList from "./pages/Admin/OrderList.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";

// Auth
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";

// Home
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Products/Favorites.jsx";
import ProductDetails from "./pages/Products/ProductDetails.jsx";

import Wedo from "./pages/LandingPage/Wedo.jsx";
import Weare from "./pages/LandingPage/Weare.jsx";
import Rewards from "./pages/LandingPage/Rewards.jsx";

import Cart from "./pages/Cart.jsx";
import Shop from "./pages/Shop.jsx";

// Perfil
import Profile from "./pages/User/Profile.jsx";
import UserOrder from "./pages/User/UserOrder.jsx";

// Compra
import Shipping from "./pages/Orders/Shipping.jsx";
import PlaceOrder from "./pages/Orders/PlaceOrder.jsx";
import Order from "./pages/Orders/Order.jsx";

// Paypal
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/wedo" element={<Wedo />} />
      <Route path="/weare" element={<Weare />} />
      <Route path="/Reward" element={<Rewards />} />


      <Route index={true} path="/" element={<Home/>}/>
      <Route path="/favorite" element={<Favorites />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/shop" element={<Shop />} />
      
      
      <Route path="" element={<PrivateRoute/>}>
        <Route path="/profile" element={ <Profile/> } />
        <Route path="/user-orders" element={<UserOrder/>} />
        <Route path="/shipping" element={ <Shipping/> } />
        <Route path="/placeorder" element={ <PlaceOrder/> } />
        <Route path="/order/:id" element={<Order/>} />
      </Route>

      <Route path="/admin" element={<AdminRoute/>}>
        <Route path="userlist" element={<UserList/>}/>
        <Route path="categorylist" element={<CategoryList/>}/>
        <Route path="productlist" element={<ProductList/>}/>
        <Route path="allproductslist" element={<AllProducts/>}/>
        <Route path="product/update/:_id" element={<UpdateProduct/>}/>
        <Route path="orderlist" element={<OrderList/>}/>
        <Route path="dashboard" element={<AdminDashboard/>}/>
      </Route>
    </Route>

  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PayPalScriptProvider>
      <RouterProvider router={router} />
    </PayPalScriptProvider>
  </Provider>
);

