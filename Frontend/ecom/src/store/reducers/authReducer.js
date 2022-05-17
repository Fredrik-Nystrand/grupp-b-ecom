import actiontypes from '../actiontypes';


const initState = {
  error: null,
  loading: false,
  token: null,
}

const authReducer = (state = initState, action) => {

  switch (action.type) {
    case actiontypes().auth.authorize:
      return {
        ...state,
        loading: true
      }

    case actiontypes().auth.authorizeSuccess:
      localStorage.setItem('token', action.payload)
      return {
        ...state,
        loading: false,
        token: action.payload
      }
    
    case actiontypes().auth.authorizeFailure:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}

export default authReducer;