import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__links">
          <NavLink to="/" className="nav-link">Shop</NavLink>
          <NavLink to="/admin" className="nav-link">Admin</NavLink>
          <NavLink to="/user" className="nav-link">User</NavLink>
        </div>
        <div className="navbar__logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className="navbar__actions">
          <Link to="/login">
            <button className="btn navbar-btn"><i className="fa-solid fa-user"></i>Login</button>
          </Link>
          <Link to='/cart'>
            <div className="cart-btn">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar