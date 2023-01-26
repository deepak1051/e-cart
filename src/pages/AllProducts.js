
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, fetchAllProducts } from '../store'
import './allProducts.css'
import Loader from '../components/Loader.js'

import { ToastContainer, toast } from 'react-toastify';
const AllProducts = () => {
  const { data, isLoading, error } = useSelector(state => state.products)
  // const [data, setData] = useState([])
  const [clone, setClone] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const originalPromiseResult = await dispatch(fetchAllProducts()).unwrap()
        console.log(originalPromiseResult)
        setClone(originalPromiseResult)
      } catch (error) {
        console.log(error)
      }

    }
    fetchData()
    // dispatch(fetchAllProducts())
    // .unwrap()
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
    // setClone(data)
    // console.log(clone)
  }, [dispatch])


  const handleFilter = (category) => {
    const filteredProducts = data.filter(p => p.category === category)
    setClone(filteredProducts)
  }
  const notify = () => toast('Added To Cart!', {
    className: 'toast-message',
    position: toast.POSITION.TOP_LEFT
  })
  const handleClick = (product) => {
    dispatch(addToCart(product))
    notify()
  }

  if (isLoading) return <Loader />
  if (error) return <h1>{error.message}</h1>
  return (
    <div className='home'>
      <h1>All Products</h1>
      <div >
        <button onClick={() => setClone(data)} className='btn'>All</button>
        <button onClick={() => handleFilter("men's clothing")} className='btn'>men</button>
        <button onClick={() => handleFilter("women's clothing")} className='btn'>women</button>
        <button onClick={() => handleFilter("electronics")} className='btn'>electronics</button>
        <button onClick={() => handleFilter("jewelery")} className='btn'>jewelery</button>
      </div>

      <div className="product_container">
        {clone.map((item) => (
          <div className="card" key={item.id}>
            <Link to={`/product/${item.id}`}>
              <img
                src={item.image}
                alt="Avatar"
                style={{ width: "100%", height: "100px", objectFit: "contain" }}
              />
            </Link>
            <div className="container">
              <h5>
                {item.title}
              </h5>
              <p>${item.price}</p>
            </div>

            <div className='btn-container'>
              <button onClick={() => handleClick(item)} className='btn-1 cart-btn'>Cart</button>
              <Link to={`/products/${item.id}`}> <button className='btn-1 detail-btn'>Details</button></Link>
            </div>
          </div>
        ))
        }
      </div >
      <ToastContainer />
    </div >
  )
}

export default AllProducts



  // < ul className = 'product_container' >
  // {
  //   data.map(product => {
  //     return <div key={product.id} className='product_card'>

  //       <img src={product.image} alt={product.title} />
  //       <p>{product.title}</p>
  //       {/* </Link> */}
  //       <div className='button_container'>
  //         <button onClick={() => handleClick(product)} className='btn-1'>add to cart</button>
  //         <Link to={`/products/${product.id}`}> <button className='btn-2'>details</button></Link>
  //       </div>
  //     </div>
  //   })
  // }
  //     </ >