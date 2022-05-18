import { combineReducers } from 'redux'
import productsReducer from './productsReducer'
import singleProductReducer from './singleProductReducer'
import cartReducer from './cartReducer'
import authReducer from './authReducer'
import orderReducer from './orderReducer'


export default combineReducers({
  productsReducer,
  singleProductReducer,
  cartReducer,
  authReducer,
  orderReducer
})