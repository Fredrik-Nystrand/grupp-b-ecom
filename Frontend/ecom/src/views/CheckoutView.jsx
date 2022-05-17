import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/ShoppingCart/CartItem'

const CheckoutView = () => {
  const { cart, totalPrice } = useSelector(state => state.cartReducer)

  return (
    <div className="container content">
      { cart.map(product => (
        <CartItem product={product} key={product._id} />
      ))}
    </div>
  )
}

export default CheckoutView