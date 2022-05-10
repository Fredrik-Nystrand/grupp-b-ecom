import React from 'react'
import {Link} from 'react-router-dom'

const ProductCard = () => {
  return (
    <Link to="/details">
      <div className="product-card">
        <div className="product-card__img-wrapper">
          <img src="https://cdn.shopify.com/s/files/1/0498/8764/1749/products/triveni_600x.jpg?v=1617089965" alt="" />
        </div>
        <div className="product-card__content-wrapper">
          <h2>Title for some product</h2>
          <div className="product-card__price-wrapper">
            <div className="product-card__price sale">20kr</div>
            <div className="product-card__price">12kr</div>
          </div>
        </div>
      </div>
    </Link>
  )
}



export default ProductCard