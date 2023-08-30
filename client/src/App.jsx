import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import About from "./page/About";
import Contact from "./page/Contact";
import Policy from "./page/Policy";
import PageNotFound from "./page/PageNotFound";
import Register from "./page/Auth/Register";
import { Toaster } from "react-hot-toast";
import Login from "./page/Auth/Login";
import Dashboard from "./page/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPassword from "./page/Auth/ForgotPassword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./page/Admin/AdminDashboard";
import CreateCategory from "./page/Admin/CreateCategory";
import CreateProduct from "./page/Admin/CreateProduct";
import Profile from "./page/user/Profile";
import Products from "./page/Admin/Product";
import UpdateProduct from "./page/Admin/UpdateProduct";
import Search from "./page/Search";
import ProductDetails from "./page/ProductDetails";
import Categories from "./page/Categories";
import CategoryProduct from "./page/CategoryProduct";
import CartPage from "./page/CartPage";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/search" element={<Search />} />
        <Route path="user" element={<Dashboard />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />

          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
