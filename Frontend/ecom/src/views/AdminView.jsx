import React from 'react'
import AdminUserList from '../components/admin/AdminUserList'

const Admin = () => {
  return (
    <div className='container'>
      <div className='admin-container'>
        <h4>Email</h4>
        <h4>User Id</h4>
        <h4>Order Status</h4>
      </div>
      <ul>
        <AdminUserList />
        <AdminUserList />
        <AdminUserList />
      </ul>


    </div>
  )
}

export default Admin