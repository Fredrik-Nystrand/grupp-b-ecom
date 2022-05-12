import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, removeFromCart } from '../../store/actions/cartActions'



const CartItem = ({product}) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
        <div className="cart-item__img-wrapper">
          <img src={product.imgURL} alt="" />
        </div>
        <div className="cart-item__content-wrapper">
          <Link to={`/details/${product._id}`}>
            <h2>{product.name}</h2>
          </Link>
          <div className="cart-controls">
            <button onClick={() => dispatch(decrement(product._id))}><i className="fa-solid fa-minus"></i></button>
            <input className="cart-item-quantity" value={product.quantity} readOnly={true} type="number" />
            <button onClick={() => dispatch(increment(product._id))}><i className="fa-solid fa-plus"></i></button>
          </div>
          
          <div className="cart-item__price-wrapper">
            {/* <div className="cart-item__price">20kr</div> */}
            <p>x</p>
            <div className="cart-item__price sale">{product.price} KR</div>
          </div>

          <div className="cart-delete">
            <button onClick={() => dispatch(removeFromCart(product._id))}><i className="fa-solid fa-trash-can"></i></button>
          </div>
        </div>
      </div>
  )
}


export default CartItem
