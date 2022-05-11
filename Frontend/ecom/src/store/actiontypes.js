const actiontypes = () => {
  return {
    products: {
      getProducts: 'GET_PRODUCTS',
      getProductsSuccess: 'GET_PRODUCTS_SUCCESS',
      getProductsFailure: 'GET_PRODUCTS_FAILURE',
      getSingleProduct: 'GET_SINGLE_PRODUCT',
      getSingleProductSuccess: 'GET_SINGLE_PRODUCT_SUCCESS',
      getSingleProductFailure: 'GET_SINGLE_PRODUCT_FAILURE'
    }
  }
}

export default actiontypes