import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../store'
import "./singleProduct.css"
import { ToastContainer, toast } from 'react-toastify';

const SingleProduct = () => {
  const [product, setProduct] = useState({})
  const { id } = useParams()
  const dispatch = useDispatch()
  // const filteredProduct = data.find(p => p.id === id)
  // console.log(filteredProduct)

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
      setProduct(res.data)
    }
    fetchProduct()
  }, [id])

  const { title, price, category, description, image } = product
  const notify = () => toast("Added To Cart!");
  const handleCart = (product) => {
    dispatch(addToCart(product))
    notify()
  }

  return (
    <div className='big-div'>
      <div className='products-info'>
        <img src={image} alt={title} />

        <div className='product-content'>

          <h3>{title}</h3>
          <h4>Price: ${price}</h4>
          <h6>Manufacturer: {category}</h6>
          <p>{description}</p>
          <p>Rating: {price}</p>
          <button className='btn-cart' onClick={() => handleCart(product)}>Add to cart</button>
          <ToastContainer />
        </div>

      </div>

    </div>
  )
}

export default SingleProduct





// function App() {
//   const notify = () => toast("Wow so easy!");

//   return (
//     <div>
//       <button onClick={notify}>Notify!</button>
//       <ToastContainer />
//     </div>
//   );
// }






















