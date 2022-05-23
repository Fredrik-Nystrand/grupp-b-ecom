import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminUserList from '../components/admin/AdminUserList'
import {getUsers} from '../store/actions/usersActions'


const Admin = () => {

  const {token} = useSelector(state => state.authReducer)
  const {users} = useSelector(state => state.usersReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers(token))
  },[dispatch, token, getUsers])

  return (
    <div className='container content'>
      <div className='admin-container'>
        <h4>Email</h4>
        <h4>User Id</h4>
        <h4>Edit</h4>
      </div>
      <ul className="admin-list">
        {users.map(user => (<AdminUserList key={user._id} user={user} />))}
      </ul>


    </div>
  )
}

export default Admin