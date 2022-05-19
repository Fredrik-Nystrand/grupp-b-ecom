import {useState} from 'react'



const OrderItem = ({order}) => {


  const setColor = () => {
    switch(order.status){
      case 'Sent': { return <i className="fa-solid fa-square sent"></i>}
  
      case 'Canceled': {return <i className="fa-solid fa-square canceled"></i>}
  
      default:
        return <i className="fa-solid fa-square pending"></i>
    }
  }

  const [open, setOpen] = useState(false)
  return (
    <div>
    <li className='userprofile-order'>
    <div className="order-status-wrapper">
      <div className='userprofile-order-date'>{order.createdAt.split('T')[0]}</div>
      <div className='userprofile-order-number'>{order._id}</div>
    
      <div className='userprofile-order-status'>
          <p className='userprofile-status-text'>{order.status}</p>
          <div>
            {setColor()}
          </div>
          <button className='userprofile-chevron' onClick={() => setOpen(!open)}><i className="fa-solid fa-chevron-down"></i></button>
      </div>
    </div>
    {open && UPdropdownMenu()}
   
    </li>
    
  </div>
  )

  function UPdropdownMenu(props) {
 
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