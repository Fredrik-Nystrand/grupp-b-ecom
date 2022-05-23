import {useEffect}from 'react'
import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams, useNavigate} from 'react-router-dom'
import OrderItem from '../components/userView/OrderItem'
import {getOrders} from '../store/actions/ordersAction'
import {getUsers} from '../store/actions/usersActions'


const UserProfileView = () => {
    const {token, name, email} = useSelector(state => state.authReducer)
    const {orders} = useSelector(state => state.orderReducer)
    const {users, loading} = useSelector(state => state.usersReducer)
    const [user, setUser] = useState({name: '', email: ''})

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();

    

    useEffect(() => {
      
      if(id){
        dispatch(getOrders(token, id))
        dispatch(getUsers(token))
      }else {
        dispatch(getOrders(token))
        setUser({name, email})
      }
      
    }, [dispatch, token, id, name, email])


    useEffect(() => {
      if(!loading && users.length > 0 && id){
        const user = users.find(user => user._id === id)
        setUser({name: user.name, email: user.email})
      }


    }, [loading, id, users])

    return (
  
    <div className="userprofile container content">
        <div className="userprofile-card">
        <div className="btn-back " onClick={() => navigate(-1)}><i className="fa-solid fa-chevron-left"></i> Go Back</div>
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