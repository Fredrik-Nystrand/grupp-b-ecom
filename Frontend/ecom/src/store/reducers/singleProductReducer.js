import actiontypes from '../actiontypes';


const initState = {
  loading: false,
  error: null,
  data: []
}


const singleProductReducer = (state = initState, action) => {
  switch (action.type) {
    case actiontypes().products.getSingleProduct:
      return {
        ...state,
        loading: true
      }

    case actiontypes().products.getSingleProductSuccess:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload
      }

    case actiontypes().products.getSingleProductFailure:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    
    default: 
    return state
  }
}

export default singleProductReducer