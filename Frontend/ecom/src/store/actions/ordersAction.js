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


export const editOrder = (order, token) => {
  return async dispatch => {
    dispatch({
      type: actiontypes().orders.editOrder
    })

    try {
      const res = await axios.put(`http://localhost:9000/api/orders/${order._id}`, order, {headers: { Authorization: "Bearer " + token}})
      if(res.status === 200){
        dispatch(editOrderSuccess(res.data))
      }else {
        throw new Error('Kunde inte uppdatera ordern')
      }
    } catch (err) {
      dispatch(editOrderFailure(err.message))
    }
  }
}


const editOrderSuccess = (order) => {
  return {
    type: actiontypes().orders.editOrderSuccess,
    payload: order
  }
}

const editOrderFailure = (err) => {
  return {
    type: actiontypes().orders.editOrderFailure,
    payload: err
  }

}


export const deleteOrder = (id, token) => {
  return async dispatch => {
    dispatch({
      type: actiontypes().orders.deleteOrder
    })

    try {
      const res = await axios.delete(`http://localhost:9000/api/orders/${id}`, {headers: { Authorization: "Bearer " + token}})
      if(res.status === 200){
        dispatch(deleteOrderSuccess(res.data))
        //console.log(res.data)
      }else{
        throw new Error('Kunde inte ta bort ordern')
      }
    } catch (err) {
      dispatch(deleteOrderFailure(err.message))
    }
  }
}


const deleteOrderSuccess = (id) => {
  console.log(id)
  return {
    type: actiontypes().orders.deleteOrderSuccess,
    payload: id
  }
}

const deleteOrderFailure = (err) => {
  return {
    type: actiontypes().orders.deleteOrderFailure,
    payload: err
  }

}
