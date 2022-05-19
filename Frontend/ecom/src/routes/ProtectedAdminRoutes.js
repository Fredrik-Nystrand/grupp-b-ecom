import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { checkAdmin } from '../store/actions/authActions'

const ProtectedAdminRoutes = (props) => {
  const {token, isAdmin} = useSelector(state => state.authReducer)
  const location = useLocation()

  return token && isAdmin
  ? props.children
  : <Navigate to="/login" replace state={{from: location.pathname}} />
}

export default ProtectedAdminRoutes