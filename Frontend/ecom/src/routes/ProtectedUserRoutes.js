import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectedUserRoutes = (props) => {
  const {token} = useSelector(state => state.authReducer)
  const location = useLocation()

  console.log(token)

  return token 
  ? props.children
  : <Navigate to="/login" replace state={{from: location.pathname}} />
}

export default ProtectedUserRoutes