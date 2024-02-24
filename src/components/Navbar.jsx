import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import { useAuth } from "../store/auth";
function Navbar() {

  const { isLoggedIn } = useAuth();
  console.log("login or not ", isLoggedIn);
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">Mern Project</NavLink>
          </div>
        
      
      <nav>
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          {isLoggedIn ? (
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/register"> Register </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login"> Login </NavLink>
                  </li>
                </>
              )}
          
        </ul>
      </nav>
      </div>
      </header>
    </>
  );
}

export default Navbar;
