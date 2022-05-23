import {useEffect}from 'react'
import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useLocation} from 'react-router-dom'
import OrderItem from '../components/userView/OrderItem'
import {getOrders} from '../store/actions/ordersAction'


const UserProfileView = () => {
    const {token, name, email} = useSelector(state => state.authReducer)
    const {orders} = useSelector(state => state.orderReducer)
    const {users} = useSelector(state => state.usersReducer)
    const [user, setUser] = useState({name: '', email: ''})


    const dispatch = useDispatch();
    const {state} = useLocation();

    

    useEffect(() => {
      if(state?.from){
        if(state.from === 'admin'){
          dispatch(getOrders(token, state.id))
          const user = users.find(user => user._id === state.id)
          setUser({name: user.name, email: user.email})
        }
      }else {
        dispatch(getOrders(token))
        setUser({name, email})
      }
      
    }, [dispatch, token, state, email, name ,users])

    return (
  
    <div className="container content">
        <div className="userprofile-card">
           <div className="userprofile-info-header">
               <div className='userprofile-info'>
               <p className="name">{user.name}</p>
               <p className="email">{user.email}</p>
               </div>
           </div>          
           <ul className='userprofile-orderlist'>
               <li className='userprofile-header'>
                   <div className="userprofile-column date">Date</div>
                   <div className="userprofile-column order-number">Order ID</div>
                   <div className="userprofile-column status">Order status</div>
               </li>

                {orders.map(order => (
                  <OrderItem key={order._id} order={order} />
                ))}                        
            </ul>

        </div>
    </div>
   
  )


}




export default UserProfileView