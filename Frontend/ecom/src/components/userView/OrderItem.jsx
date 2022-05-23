import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {editOrder, deleteOrder} from '../../store/actions/ordersAction'


const OrderItem = ({order}) => {

  const {token, isAdmin} = useSelector(state => state.authReducer)
  const dispatch = useDispatch()

  const setColor = () => {
    switch(order.status){
      case 'delivered': { return <i className="fa-solid fa-square sent"></i>}
  
      case 'canceled': {return <i className="fa-solid fa-square canceled"></i>}
  
      default:
        return <i className="fa-solid fa-square pending"></i>
    }
  }

  const applyOrderStatus = () => {
    switch(order.status){
      case 'delivered': return 'delivered'
  
      case 'canceled': return 'canceled'
  
      default:
        return 'pending'
    }
  }


  const changeOrderStatus = (e) => {
    const newStatus = e.target.value;
    const editedOrder = {
      ...order,
      status: newStatus
    }

    dispatch(editOrder(editedOrder, token));

  }

  const [open, setOpen] = useState(false)
  return (
    <div>
    <li className='userprofile-order'>
    <div className="order-status-wrapper">
      <div className='userprofile-order-date'>{order.createdAt.split('T')[0]}</div>
      <div className='userprofile-order-number'>{order._id}</div>
    
      <div className='userprofile-order-status'>
          <div className="order-status-options">
            {isAdmin 
            ? <select name="orderStatus" id="orderStatus" value={applyOrderStatus()} onChange={(e) => changeOrderStatus(e)}>
            
              <option value="delivered">Delivered</option>
              <option value="pending">Pending</option>
              <option value="canceled">Canceled</option>
            </select>
            : <p>{order.status}</p>
            }
            
            <div>
              {setColor()}
            </div>
            {isAdmin && <button className="btn-delete" onClick={() => dispatch(deleteOrder(order._id, token))}><i className="fa-solid fa-trash-can" /></button>}
          </div>
          <button className='userprofile-chevron' onClick={() => setOpen(!open)}><i className="fa-solid fa-chevron-down"></i></button>
      </div>
    </div>
    {open && UPdropdownMenu()}
   
    </li>
    
  </div>
  )

  function UPdropdownMenu() {
 
    return (
    <div className='userprofile-dropdown'>
        <ul className="order-list">
          {order.cart.map(item => (
            <li className='userprofile-dropdown-item'>
            <div className="order-list__img">
              <img src={item.imgURL} alt="" />
            </div>
            <div className="order-list__name">
              <p>{item.name}</p>
            </div>
            <div className="order-list__price">
              <p>{item.quantity}</p>
              <p>x</p>
              <p>{item.price} KR</p>
            </div>
          </li>
          ))}
            
        </ul>
        <div className="order-total-price">
          <p>Total Price: {order.totalPrice} KR</p>
        </div>
    </div>
  )
}


}

export default OrderItem