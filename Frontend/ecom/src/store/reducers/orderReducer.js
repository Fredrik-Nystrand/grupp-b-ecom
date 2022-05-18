import actiontypes from '../actiontypes';

const initState = {
  loading: false,
  error: null,
  orders: [],
}

const orderReducer = (state = initState, action) => {
  switch (action.type) {

    case actiontypes().orders.createOrder:
      return {
        ...state,
      loading: true,
      }
    case actiontypes().orders.createOrderSuccess:
      return {
        ...state,
      loading: false,
      error: null,
    }
    case actiontypes().orders.createOrderFailure:
      return {
        ...state,
      loading: false,
      error: action.payload
    }


    
    case actiontypes().orders.getOrders:
      return {
        ...state,
      loading: true,
      }

    case actiontypes().orders.getOrdersSuccess:
      console.log(action.payload)
      return {
        ...state,
      loading: false,
      error: null,
      orders: action.payload
    }

    case actiontypes().orders.getOrdersFailure:
      return {
        ...state,
      loading: false,
      error: action.payload
    }



    default:
      return state
  }
}

export default orderReducer;