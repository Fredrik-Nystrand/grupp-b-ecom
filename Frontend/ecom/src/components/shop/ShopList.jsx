import {useState} from 'react'
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux'

const ShopList = () => {

  const {loading, error, data: products} = useSelector(state => state.productsReducer)
  return (
    <>
      { error && <p>error</p> }
      <div className="shop-list container">
        { products.map(product => (
        <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  )
}

export default ShopList