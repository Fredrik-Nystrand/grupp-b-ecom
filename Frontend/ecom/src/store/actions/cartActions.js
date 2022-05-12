import actiontypes from "../actiontypes";

export const addToCart = product => {
  return {
    type: actiontypes().cart.addToCart,
    payload: product
  }
}

export const decrement = id => {
  return {
    type: actiontypes().cart.decrement,
    payload: id
  }
}

export const increment = id => {
  return {
    type: actiontypes().cart.increment,
    payload: id
  }
}

export const removeFromCart = id => {
  return {
    type: actiontypes().cart.removeFromCart,
    payload: id
  }
}