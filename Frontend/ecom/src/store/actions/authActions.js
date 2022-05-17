import axios from 'axios'
import actiontypes from '../actiontypes'
import jwt_decode from "jwt-decode";


const apiCall = (url, user, dispatch) => {
  axios.post(url, user)
  .then(res => {
    dispatch(authSuccess(res.data.token))
  })
  .catch(err => dispatch(authFailure(err.message)))
}


export const registerUser = (user) => {
  return dispatch => {
    apiCall('http://localhost:9000/api/users', user, dispatch)
  }
}

export const loginUser = (user) => {
  return dispatch => {
    apiCall('http://localhost:9000/api/users/login', user, dispatch)
  }
}


export const checkAuth = () => {
  return dispatch => {
    const token = localStorage.getItem('token')

    if(token) {
      const decode = jwt_decode(token);
      if (decode.exp * 1000 < new Date().getTime()) {
          console.log('Token Expired')
          localStorage.removeItem('token')
      }else {
        dispatch(authSuccess(token))
      }
    }
  }
}

const authSuccess = (token) => {
  return {
    type: actiontypes().auth.authorizeSuccess,
    payload: token
  }
}

const authFailure = (err) => {
  return {
    type: actiontypes().auth.authorizeFailure,
    payload: err
  }
}