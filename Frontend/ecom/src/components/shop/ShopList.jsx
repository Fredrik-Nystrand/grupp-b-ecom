import {useState} from 'react'
import ProductCard from './ProductCard';


const ShopList = () => {

  return (
    <div className="shop-list container">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />

    </div>
  )
}

export default ShopList