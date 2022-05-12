import actiontypes from '../actiontypes'
import axios from 'axios';

export const getSingleProduct = (id) => {
  return async dispatch => {
    dispatch({
      type: actiontypes().products.getSingleProduct
    })
    try {
      const res = await axios.get(`http://localhost:9000/api/products/${id}`)
      console.log(res.data)

      if(res.status === 200){
        dispatch(getProductSuccess(res.data))
      }else {
        throw new Error('Could not fetch the product')
      }
    } catch (err) {
      dispatch(getProductFailure(err.message))
    }
  }
}

const getProductSuccess = (product) => {
  return {
    type: actiontypes().products.getSingleProductSuccess,
    payload: product
  }
}

const getProductFailure = (err) => {
  return {
    type: actiontypes().products.getSingleProductFailure,
    payload: err
  }

}