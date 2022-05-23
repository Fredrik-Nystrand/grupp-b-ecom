import actiontypes from '../actiontypes';

const initState = {
  loading: false,
  error: null,
  orders: [],
}

const orderReducer = (state = initState, action) => {
  switch (action.type) {

    // CREATE ORDER
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


    // GET ORDERS
    case actiontypes().orders.getOrders:
      return {
        ...state,
      loading: true,
      }

    case actiontypes().orders.getOrdersSuccess:
      //console.log(action.payload)
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


    //EDIT ORDERS

    case actiontypes().orders.editOrder:
      return {
        ...state,
        loading: true
      }


    case actiontypes().orders.editOrderSuccess:
      return {
        ...state,
        loading: false,
        error: null,
        orders: state.orders.map(order => {
          if(order._id === action.payload._id){
            return order = action.payload
          }
          return order
        })
      }

    case actiontypes().orders.editOrderFailure:
      return {
        ...state,
        loading: false,
        error: action.payload
      }


    //DELETE ORDERS

    case actiontypes().orders.deleteOrder:
      return {
        ...state,
        loading: true
      }

    case actiontypes().orders.deleteOrderSuccess:
      return {
        ...state,
        loading: false,
        error: null,
        orders: state.orders.filter(order => order._id !== action.payload)
      }
    
    case actiontypes().orders.deleteOrderFailure:
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