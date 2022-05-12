import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

const ShoppingCart = () => {
  return (
    <div className="container">
        <div className='shopping-cart'>
        <div className='cart-top'>
            <CartItem />
            <CartItem />
            <CartItem />
        </div>

        <div className='cart-bottom'>
            <div>
                <div>Total Price: 0</div>
                <small className='text-muted'>Ink. vat</small>
            </div>
            <div>
                <Link to='/login'>
                    <button className='btn navbar-btn'>Checkout</button>
                </Link>
                {/* <button btn btn-warning>Clear Cart</button> */}
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default ShoppingCart