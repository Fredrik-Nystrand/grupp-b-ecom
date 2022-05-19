import actiontypes from '../actiontypes';

const initState = {
  loading: false,
  error: null,
  users: []
}


const usersReducer = (state = initState, action) => {
  switch(action.type) {

    case actiontypes().users.getUsers: {
      return {
        ...state,
        loading: true
      }
    }

    case actiontypes().users.getUsersSuccess: {
      return {
        ...state,
        loading: false,
        error: null,
        users: action.payload
      }
    }

    case actiontypes().users.getUsersFailure: {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }

    default:
      return state
  }
}


export default usersReducer