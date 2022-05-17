import {useState} from 'react'

const OrderItem = () => {

  const [open, setOpen] = useState(false)
  return (
    <div>
    <li className='userprofile-order'>
    <div className='userprofile-order-date'>2022-02-18</div>
    <div className='userprofile-order-number'>102319230</div>
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