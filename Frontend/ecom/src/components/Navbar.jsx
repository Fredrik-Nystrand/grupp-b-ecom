import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__links">
          <NavLink to="/" className="nav-link">Shop</NavLink>
          <NavLink to="/admin" className="nav-link">Admin</NavLink>
        </div>
        <div className="navbar__logo">
          LOGOTYP
        </div>
        <div className="navbar__actions">
          <button className="btn navbar-btn"><i class="fa-solid fa-user"></i>Login</button>
          <div className="cart-btn">
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar