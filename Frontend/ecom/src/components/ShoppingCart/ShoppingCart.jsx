import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'


const ShoppingCart = ({toggleCart}) => {

  const { cart, totalPrice } = useSelector(state => state.cartReducer)
  return (
        <div className='shopping-cart'>
          <div className='cart-top'>
              { cart.map(product => (
                <CartItem product={product} key={product._id} />
              ))}
          </div>

          <div className='cart-bottom'>
              <div>
                  <div>Total Price: {totalPrice} KR</div>
                  <small className='text-muted'>Ink. vat</small>
              </div>
              <div>
                  {cart.length > 0 
                  ? <Link to='/checkout'>
                      <button className='btn navbar-btn' onClick={toggleCart}>Checkout</button>
                    </Link>
                  : ''  
                }
                  {/* <button btn btn-warning>Clear Cart</button> */}
              </div>
          </div>
    </div>
    
  )
}

export default ShoppingCart