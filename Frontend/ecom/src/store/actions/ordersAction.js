import axios from 'axios'
import actiontypes from '../actiontypes'


export const createOrder = (payload) => {
  
  return async dispatch => {
    dispatch({
      type: actiontypes().orders.createOrder
    })
    try {
      console.log(payload.token)
      const res = await axios.post('http://localhost:9000/api/orders', payload.order, {headers: { Authorization: "Bearer " + payload.token}})
      dispatch(createOrderSuccess(res.data))
    } catch (err) {
      dispatch(createOrderFailure(err))
    }
  }
}

const createOrderSuccess = () => {
  return {
    type: actiontypes().orders.createOrderSuccess,
    payload: null
  }
}

const createOrderFailure = (err) => {
  return {
    type: actiontypes().orders.createOrderFailure,
    payload: err
  }
}


export const getOrders = (token, id=null) => {
  return async dispatch => {
    dispatch({
      type: actiontypes().orders.getOrders
    })
    try {
      let res;
      if(id){
        res = await axios.get(`http://localhost:9000/api/orders/user/${id}`, {headers: { Authorization: "Bearer " + token}})
      }else {
        res = await axios.get('http://localhost:9000/api/orders', {headers: { Authorization: "Bearer " + token}})
      }

      if(res.status === 200){
        dispatch(getOrdersSuccess(res.data.orders))
      }else {
        throw new Error('Could not fetch any orders')
      }
    } catch (err) {
      dispatch(getOrdersFailure(err.message))
    }
  }
}

const getOrdersSuccess = (orders) => {
  return {
    type: actiontypes().orders.getOrdersSuccess,
    payload: orders
  }
}

const getOrdersFailure = (err) => {
  return {
    type: actiontypes().orders.getOrdersFailure,
    payload: err
  }

}