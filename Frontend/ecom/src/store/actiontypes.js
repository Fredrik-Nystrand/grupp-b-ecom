const actiontypes = () => {
  return {
    products: {
      getProducts: 'GET_PRODUCTS',
      getProductsSuccess: 'GET_PRODUCTS_SUCCESS',
      getProductsFailure: 'GET_PRODUCTS_FAILURE',
      getSingleProduct: 'GET_SINGLE_PRODUCT',
      getSingleProductSuccess: 'GET_SINGLE_PRODUCT_SUCCESS',
      getSingleProductFailure: 'GET_SINGLE_PRODUCT_FAILURE'
    },
    cart: {
      addToCart: 'ADD_TO_CART',
      removeFromCart: 'REMOVE_FROM_CART',
      increment: 'INCREMENT',
      decrement: 'DECREMENT',
      editQuantity: 'EDIT_QUANTITY'
    },
    auth: {
      authorize: 'AUTHORIZE',
      authorizeSuccess: 'AUTHORIZE_SUCCESS',
      authorizeFailure: 'AUTHORIZE_FAILURE',
      logout: 'LOGOUT',
    }
  }
}

export default actiontypes