import {useState} from 'react'

const OrderItem = ({order}) => {

  const [open, setOpen] = useState(false)
  return (
    <div>
    <li className='userprofile-order'>
    <div className='userprofile-order-date'>{order.createdAt.split('T')[0]}</div>
    <div className='userprofile-order-number'>{order._id}</div>
    <div className='userprofile-order-status'>
        <p className='userprofile-status-text'>Skickad</p>
        <div>
        <i className="fa-solid fa-square sent"></i>
        </div>
        <button className='userprofile-chevron' onClick={() => setOpen(!open)}><i className="fa-solid fa-chevron-down"></i></button>
        {open && UPdropdownMenu()}
    </div>
    </li>
  </div>
  )

  function UPdropdownMenu(props) {
 
    return (
    <div className='userprofile-dropdown'>
        <ul>
            <li className='userprofile-dropdown-item'></li>
        </ul>

    </div>
  )
}

}

export default OrderItem