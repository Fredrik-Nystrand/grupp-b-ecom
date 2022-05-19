import axios from 'axios'
import actiontypes from '../actiontypes'

export const getUsers = (token) => {
  return async dispatch => {
    dispatch({
      type: actiontypes().users.getUsers
    })

    try {
      const res = await axios.get('http://localhost:9000/api/users', {headers: { Authorization: "Bearer " + token}})
      if(res.status === 200){
        dispatch(getUsersSuccess(res.data.users))
      }else {
        throw new Error('Could not fetch any orders')
      }
    } catch (err) {
      dispatch(getUsersFailure(err.message))
    }

  }
}

const getUsersSuccess = (users) => {
  return {
    type: actiontypes().users.getUsersSuccess,
    payload: users
  }  
}

const getUsersFailure = (error) => {
  return {
    type: actiontypes().users.getUsersFailure,
    payload: error
  }  
}