import { combineReducers } from 'redux'
import productsReducer from './productsReducer'
import singleProductReducer from './singleProductReducer'
import cartReducer from './cartReducer'
import authReducer from './authReducer'


export default combineReducers({
  productsReducer,
  singleProductReducer,
  cartReducer,
  authReducer
})