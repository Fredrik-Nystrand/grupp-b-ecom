import {useState} from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../store/actions/singleProductActions'
import { addToCart } from '../store/actions/cartActions';

const ProductDetailsView = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({})

  useEffect(() => {
    dispatch(getSingleProduct(id))
  }, [dispatch, id])

  
  const { loading, error, data: product } = useSelector(state => state.singleProductReducer)

  useEffect(() => {

    setNewProduct({ 
      _id: product._id,
      name: product.name,
      price: product.price,
      imgURL: product.imgURL,
      quantity: 1
    })
  }, [product])

  return (
    <div className="content">
      { loading && 'loading..' }
      { error && <p>error</p> }
      <div className='product-details container'>
        <div className='product-image'>
          <img src={product.imgURL} alt="" />
        </div>
        <div className='info-wrapper'>
            <div className="title">
              <h1>{product.name}</h1>
              </div>
              <div className="prices">
                {/* <div className="price sale">20kr</div> */}
                <div className="price">{product.price} KR</div>
              </div>

            <p className='desc'>{product.description}</p>
            <button className="btn" onClick={() => dispatch(addToCart(newProduct))}>Lägg till i varukorgen</button>
            <div className="stock-wrapper">
              <p className='stock'>I lager</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ProductDetailsView


