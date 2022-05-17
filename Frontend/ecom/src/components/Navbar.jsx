import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import logo from '../assets/logo.png'
import ShoppingCart from './ShoppingCart/ShoppingCart'


const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false)

  const {token} = useSelector(state => state.authReducer)

const toggleCart = () => {
  if (cartOpen === true) {
    setCartOpen(false)
    //console.log("false")

  }else {
    setCartOpen(true)
    //console.log("true")

  }
  
}

  return (
    <>
    {cartOpen && <div className="overlay" onClick={toggleCart}></div>}
    <div className="navbar">
      <div className="container">
        <div className="navbar__links">
          <NavLink to="/" className="nav-link">Shop</NavLink>
          <NavLink to="/admin" className="nav-link">Admin</NavLink>
        </div>
        <div className="navbar__logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className="navbar__actions">
          {token
          ? (
            <Link to="/user">
            <button className="btn navbar-btn"><i className="fa-solid fa-user"></i>Profile</button>
            </Link>
          )
          : (
          <Link to="/login">
          <button className="btn navbar-btn"><i className="fa-solid fa-user"></i>Login</button>
          </Link>
          )
          }
          
          <div className="cart">
            <div className="cart-btn" onClick={toggleCart}>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            {cartOpen && <ShoppingCart toggleCart={toggleCart} />}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar