import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar: React.FC = () => {
  const location = useLocation();

  const getLinkClasses = (path: string) => {
    const baseClasses = "py-2 px-4 rounded transition-colors duration-200";
    const hoverClasses = "hover:bg-[rgb(209,31,46)] hover:text-white";
    const activeClasses =
      location.pathname === path ? "bg-[rgb(209,31,46)] text-white" : "";
    return `${baseClasses} ${hoverClasses} ${activeClasses}`;
  };

  return (
    <div className="fixed  mx-auto w-full max-w-screen-xl z-50">
      <div className="navbar bg-neutral text-neutral-content">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52"
            >
              <li>
                <Link to="/" className={getLinkClasses("/")}>
                  Homepage
                </Link>
              </li>
              <li>
                <Link to="/products" className={getLinkClasses("/products")}>
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/product-management"
                  className={getLinkClasses("/product-management")}
                >
                  Product Management
                </Link>
              </li>
              <li>
                <Link
                  to="/product-details"
                  className={getLinkClasses("/product-details")}
                >
                  Product
                </Link>
              </li>
              <li>
                <Link to="/cart" className={getLinkClasses("/cart")}>
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/checkout" className={getLinkClasses("/checkout")}>
                  Checkout
                </Link>
              </li>
              <li>
                <Link to="/about" className={getLinkClasses("/about")}>
                  About
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img
              src="https://i.ibb.co/fp712Fg/logo.png"
              alt="FitZone Logo"
              className="h-8"
            />{" "}
            {/* Adjust the class and height as needed */}
          </Link>
        </div>
        <div className="navbar-center mr-4 hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/" className={getLinkClasses("/")}>
                Homepage
              </Link>
            </li>
            <li>
              <Link to="/products" className={getLinkClasses("/products")}>
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/product-management"
                className={getLinkClasses("/product-management")}
              >
                Product Management
              </Link>
            </li>
            <li>
              <Link
                to="/product-details"
                className={getLinkClasses("/product-details")}
              >
                Product
              </Link>
            </li>
            <li>
              <Link to="/cart" className={getLinkClasses("/cart")}>
                Cart
              </Link>
            </li>
            <li>
              <Link to="/checkout" className={getLinkClasses("/checkout")}>
                Checkout
              </Link>
            </li>
            <li>
              <Link to="/about" className={getLinkClasses("/about")}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
