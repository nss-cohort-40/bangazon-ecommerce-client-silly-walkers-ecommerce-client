import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";
import { Nav, NavbarBrand, Button } from 'reactstrap';
import './NavBar.css';

const NavBar = (props) => {
  const { isAuthenticated, logout } = useSimpleAuth()
 
  return (
    <Nav className="navbar navbar-light p-0 shadow">
      <NavbarBrand className="logoText"><img className="navLogo m-2" src="https://tinyurl.com/moneyman222" alt="money logo" />JoesList</NavbarBrand>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
            <NavLink className="nav-link" to="/list">Problem</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/categories">Categories</NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/sell">Sell</NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link" to="/myproducts">My Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/myaccount">My Account</NavLink>
        </li>
        {isAuthenticated() ? 
          <li className="nav-item">
            <Button outline color="secondary" className="buttonText" 
              onClick={() => {
                logout();
                props.history.push({
                  pathname: "/",});
              }} to="/"
              >
              Logout</Button>
        </li>
         : (
          <>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">Register</NavLink>
            </li>
          </>
        )}
      {isAuthenticated() ? 
        <li>
          <img className="cart p-1 mr-3" src="https://tinyurl.com/yyw8ctdh" alt="shopping cart"/>
        </li> : ('')
      }
      </ul>
    </Nav>
  );
};

export default NavBar
