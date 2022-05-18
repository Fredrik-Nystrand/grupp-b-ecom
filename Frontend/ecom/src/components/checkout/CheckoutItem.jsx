import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, removeFromCart } from '../../store/actions/cartActions'



const CheckoutItem = ({product}) => {
  const dispatch = useDispatch();

  return (
    <div className="checkout-item">
        <div className="checkout-item__img-wrapper">
          <img src={product.imgURL} alt="" />
        </div>
        <div className="checkout-item__content-wrapper">
          <Link to={`/details/${product._id}`}>
            <h2>{product.name}</h2>
          </Link>
          <div className="checkout-controls">
            <button onClick={() => dispatch(decrement(product._id))}><i className="fa-solid fa-minus"></i></button>
            <input className="checkout-item-quantity" value={product.quantity} readOnly={true} type="number" />
            <button onClick={() => dispatch(increment(product._id))}><i className="fa-solid fa-plus"></i></button>
          </div>
          
          <div className="checkout-item__price-wrapper">
            {/* <div className="checkout-item__price">20kr</div> */}
            <p>x</p>
            <div className="checkout-item__price sale">{product.price} KR</div>
          </div>

          <div className="checkout-delete">
            <button onClick={() => dispatch(removeFromCart(product._id))}><i className="fa-solid fa-trash-can"></i></button>
          </div>
        </div>
      </div>
  )
}


export default CheckoutItem
