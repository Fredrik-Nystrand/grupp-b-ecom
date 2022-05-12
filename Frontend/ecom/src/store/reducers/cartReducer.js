import actiontypes from '../actiontypes';

const initState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
}



const cartReducer = (state = initState, action) => {
  
  switch(action.type){

    case actiontypes().cart.addToCart: {
      const ref = state.cart.find(item => item._id === action.payload._id)

      const newProduct = {...action.payload}
      

      ref
      ? ref.quantity += 1
      : state.cart = [...state.cart, newProduct ]

      return {
        ...state,
        totalQuantity: setTotalQuantity(state.cart),
        totalPrice: setTotalPrice(state.cart)
      }
    }

    case actiontypes().cart.decrement: {
      const ref = state.cart.find(item => item._id === action.payload)
      
      ref.quantity <= 1
      ? ref.quantity = 1
      : ref.quantity -= 1

      return {
        ...state,
        totalQuantity: setTotalQuantity(state.cart),
        totalPrice: setTotalPrice(state.cart)
      }

    }

    case actiontypes().cart.increment: {
      const ref = state.cart.find(item => item._id === action.payload)
      
      ref.quantity >= 99
      ? ref.quantity = 99
      : ref.quantity += 1

      return {
        ...state,
        totalQuantity: setTotalQuantity(state.cart),
        totalPrice: setTotalPrice(state.cart)
      }

    }

    case actiontypes().cart.removeFromCart: {
      state.cart = state.cart.filter(product => product._id !== action.payload)

      return {
        ...state,
        totalQuantity: setTotalQuantity(state.cart),
        totalPrice: setTotalPrice(state.cart)
      }
    }

    default:
      return state
  }
  
}

export default cartReducer

const setTotalQuantity = cart => {
  let quantity = 0

  cart.forEach(product => {
    quantity += product.quantity
  })

  return quantity
}

const setTotalPrice = cart => {
  let price = 0

  cart.forEach(product => {
    price += product.price * product.quantity
  })

  return price
}

