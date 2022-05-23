import {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import CheckoutItem from '../components/checkout/CheckoutItem'
import {createOrder} from '../store/actions/ordersAction'
import { clearCart } from '../store/actions/cartActions'


const CheckoutView = () => {
  const { cart, totalPrice } = useSelector(state => state.cartReducer)
  const { id, token } = useSelector(state => state.authReducer)
  const { loading, error } = useSelector(state => state.orderReducer)
  const [newOrder, setNewOrder] = useState({})
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setNewOrder({
      token,
      order: {
        user: id,
        cart,
        totalPrice
      }
    })
  }, [cart, id, token, totalPrice]);

  useEffect(() => {
    cart.length <= 0 && navigate('/')
  }, [cart, navigate])


  const placeOrder = () => {
    dispatch(createOrder(newOrder))

    if(loading === false && error === null){
      dispatch(clearCart())
    }
  }

  return (
    <div className="container content checkout">
      { cart.map(product => (
        <CheckoutItem product={product} key={product._id} />
      ))}
      <div className='checkout-bottom'>
              <div>
                  <div>Total Price: {totalPrice} KR</div>
                  <small className='text-muted'>Ink. vat</small>
              </div>
              <div>
                <button className='btn navbar-btn' onClick={placeOrder} >Place Order</button>
              </div>
      </div>
    </div>
  )
}

export default CheckoutView