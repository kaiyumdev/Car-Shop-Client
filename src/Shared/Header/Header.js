import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  const menuItem = (
    <>
      <Link className="font-semibold" to="/">
        Home
      </Link>
      {user?.email ? (
        <>
          <Link className="font-semibold" to="/orders">
            Orders
          </Link>
        </>
      ) : (
        <Link className="font-semibold" to="/login">
          Login
        </Link>
      )}
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-base-100 h-20 mb-12 pt-12">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li tabIndex={0}>{menuItem}</li>
          </ul>
        </div>
        {/* <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li tabIndex={0}>
            <Link className="font-bold" to="/login">Login</Link>
            </li>
          </ul>
        </div> */}
        <div className="navbar-end">
          <button className="btn btn-outline btn-warning">Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
