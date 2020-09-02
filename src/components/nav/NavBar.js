import React from "react";
import { Link } from "react-router-dom";
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";

const NavBar = (props) => {
  const { isAuthenticated, logout } = useSimpleAuth()

  return (
    <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="nav-link" to="/">Joe's List</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/categories">Categories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sell">Sell</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/myproducts">My Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/settings">Settings</Link>
        </li>
        {isAuthenticated() ? 
          <li className="nav-item">
            <button className="nav-link fakeLink" 
              onClick={() => {
                logout();
                props.history.push({
                  pathname: "/",});
              }}>
              Logout</button>
          </li> : 
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
          </>
        }
      </ul>
    </nav>
  );
};

export default NavBar
