import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import logo from '../assets/logo.png'
import ShoppingCart from './ShoppingCart/ShoppingCart'
import {logout} from '../store/actions/authActions'


const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false)

  const {token, isAdmin} = useSelector(state => state.authReducer)
  const {totalQuantity} = useSelector(state => state.cartReducer)

  const dispatch = useDispatch()

const toggleCart = () => {
  if (cartOpen === true) {
    setCartOpen(false)

  }else {
    setCartOpen(true)

  }
  
}

  return (
    <>
    {cartOpen && <div className="overlay" onClick={toggleCart}></div>}
    <div className="navbar">
      <div className="container">
        <div className="navbar__links">
          <NavLink to="/" className="nav-link">Shop</NavLink>
          {token && isAdmin && <NavLink to="/admin" className="nav-link">Admin</NavLink>}
        </div>
        <div className="navbar__logo">
          <Link to="/">
            <img src={logo} alt="company logo"/>
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
          {token && <button className="btn navbar-btn" onClick={() => dispatch(logout())}>Logout</button>}
          <div className="cart">
            <div className="cart-btn" onClick={toggleCart}>
              <i className="fa-solid fa-cart-shopping"></i>
              {totalQuantity > 0 && <span className="cart-quantity">{totalQuantity}</span>}
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