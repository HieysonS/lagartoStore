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

// Auth
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";

// Perfil
import Profile from "./pages/User/Profile.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      <Route path="" element={<PrivateRoute/>}>
        <Route path="/profile" element={ <Profile/> } />
      </Route>

      <Route path="/admin" element={<AdminRoute/>}>
        <Route path="userlist" element={<UserList/>}/>
        <Route path="categorylist" element={<CategoryList/>}/>
        <Route path="productlist" element={<ProductList/>}/>
        <Route path="allproductslist" element={<AllProducts/>}/>
        <Route path="product/update/:_id" element={<UpdateProduct/>}/>
      </Route>

    </Route>

  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
