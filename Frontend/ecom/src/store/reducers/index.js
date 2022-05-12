import { combineReducers } from 'redux'
import productsReducer from './productsReducer'
import singleProductReducer from './singleProductReducer'
import cartReducer from './cartReducer'


export default combineReducers({
  productsReducer,
  singleProductReducer,
  cartReducer
})