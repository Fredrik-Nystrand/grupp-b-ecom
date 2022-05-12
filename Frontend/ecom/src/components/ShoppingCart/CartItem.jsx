import React from 'react'
import { Link } from 'react-router-dom'



const CartItem = () => {
  return (
    <div className="cart-item">
        <div className="cart-item__img-wrapper">
          <img src="https://cdn.shopify.com/s/files/1/0498/8764/1749/products/triveni_600x.jpg?v=1617089965" alt="" />
        </div>
        <div className="cart-item__content-wrapper">
          <Link to='/details/:id'>
            <h2>Title for some product</h2>
          </Link>
          <div className="cart-item__price-wrapper">
            <div className="cart-item__price sale">20kr</div>
            <div className="cart-item__price">12kr</div>
          </div>
        </div>
      </div>
  )
}


export default CartItem
