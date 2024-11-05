import { GiSelfLove } from "react-icons/gi";
import { TiShoppingCart } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import { getAllCart, getAllWishlist } from "../utils";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);

  useEffect(() => {
    const updateCounts = () => {
      setCartCount(getAllCart().length);
      setWishCount(getAllWishlist().length);
    };
    window.addEventListener("storage", updateCounts);

    updateCounts();

    return () => window.removeEventListener("storage", updateCounts);
  }, []);
  return (
    <div className="">
      <div className="navbar w-11/12 mx-auto py-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/statistics">Statistics</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/gadgets">Gadgets</NavLink>
              </li>
            </ul>
          </div>
          <Link className=" text-xl" to="/">
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/gadgets">Gadgets</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <p className="relative bg-white px-4 py-3 border rounded-full text-xl btn">
            <TiShoppingCart />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-1 bg-white border text-black rounded-full px-2 py-1 text-xs">
                {cartCount}
              </span>
            )}
          </p>
          <p className="relative bg-white px-4 py-3 border rounded-full text-xl btn">
            <GiSelfLove />
            {wishCount > 0 && (
              <span className="absolute -top-2 -right-1 bg-white border text-black rounded-full px-2 py-1 text-xs">
                {wishCount}
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
