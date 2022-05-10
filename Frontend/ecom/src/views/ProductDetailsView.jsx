import React from 'react'

const ProductDetailsView = () => {
  return (
    <div className='product-details container'>
      <div className='image'>
        <img src="https://cdn.shopify.com/s/files/1/0498/8764/1749/products/triveni_600x.jpg?v=1617089965" alt="" />
      </div>
      <div className='info-wrapper'>
          <div className="title">
            <h1>Title for some product</h1>
            <div className="prices">
              <div className="price sale">20kr</div>
              <div className="price">12kr</div>
            </div>
          </div>
          <p className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi perferendis nesciunt adipisci accusantium numquam quidem eligendi quae! Nihil magni et modi quae, voluptate, ratione commodi in hic, quia accusantium odit?</p>
          <button className="btn">Lägg till i varukorgen</button>
          <p className='stock'>I lager</p>
        </div>
    </div>
  )
}

export default ProductDetailsView


