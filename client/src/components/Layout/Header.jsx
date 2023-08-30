import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { FaShoppingCart } from "react-icons/fa";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategroy";
import axios from "axios";
import { Badge } from "antd";
import { useCart } from "../../context/cart";

function Header() {
  const [auth, setAuth] = useAuth();
  const categories = useCategory();
  const [cart] = useCart();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  const handleRoleUpdate = async () => {
    try {
      const response = await axios.post(
        "https://ecommerce-website-t7lu43q0c-codewithkainat.vercel.app/api/updateUserRole",
        {
          userId: user._id,
        }
      );
      if (response.data.success) {
        setRoleUpdated(true);
      }
    } catch (error) {
      console.error("Error updating role:", error);
    }
  };
  return (
    <nav className="navbar pe-3 navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link to="/" className="navbar-brand ">
          <FaShoppingCart /> Kainsfashion
        </Link>
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
          <SearchInput />
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to={"/categories"}
              data-bs-toggle="dropdown"
            >
              Categories
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to={"/categories"}>
                  All Categories
                </Link>
              </li>
              {categories?.map((c) => (
                <li key={c._id}>
                  <Link className="dropdown-item" to={`/category/${c.slug}`}>
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {!auth.user ? (
            <>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {auth?.user?.name}
                </NavLink>

                <ul className="dropdown-menu">
                  <li>
                    {/*roll 1 redirect admin else user */}
                    <NavLink
                      to={`/dashboard/${
                        auth?.user?.role === 1 ? "admin" : "user"
                      }`}
                      className="dropdown-item"
                    >
                      Dashboard
                    </NavLink>
                    <NavLink
                      onClick={handleLogout}
                      to="/login"
                      className="dropdown-item"
                    >
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </li>
            </>
          )}
          <li className="nav-item">
            <NavLink to="/cart" className="nav-link">
              <Badge count={cart?.length} showZero offset={[10, -5]}>
                Cart
              </Badge>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
