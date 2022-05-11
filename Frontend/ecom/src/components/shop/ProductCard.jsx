import React from 'react'
import {Link} from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
    <Link to={`details/${product._id}`}>
      <div className="product-card">
        <div className="product-card__img-wrapper">
          <img src={product.imgURL} alt="" />
        </div>
        <div className="product-card__content-wrapper">
          <h2>{product.name}</h2>
          <div className="product-card__price-wrapper">
            {/* <div className="product-card__price sale">20kr</div> */}
            <div className="product-card__price">{product.price} KR</div>
          </div>
        </div>
      </div>
    </Link>
  )
}



export default ProductCard