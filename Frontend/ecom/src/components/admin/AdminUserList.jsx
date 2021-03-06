import React from 'react'
import { useNavigate, Link} from 'react-router-dom'

const AdminUserList = ({user}) => {
  const navigate = useNavigate();
  return (
    <div className='admin-list-container'>
      <li>{user.email}</li>
      <li>{user._id}</li>
      <div className="admin-btn">
        {/* <button className="btn navbar-btn" onClick={() => navigate('/user', {replace:false, state: {from:'admin', id: user._id}})}>View User</button></div> */}
        <Link to={`/user/${user._id}`}><button className="btn navbar-btn">View User</button></Link></div> 
      
    </div>
  )
}

export default AdminUserList