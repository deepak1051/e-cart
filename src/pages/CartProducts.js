import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './cartProducts.css'
import { addToCart, removeToCart, resetCart } from '../store/index.js'
// import { MdCancel } from "react-icons/md"
const CartProducts = () => {
  const { data } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  console.log(data)

  let totalAmount = 0
  for (let el of data) {
    totalAmount += el.totalPrice
  }

  const handleCheckout = () => {
    alert('thanks for shopping...')
    dispatch(resetCart())
  }
  return (
    <div className='cart-main-container'>

      {data.length === 0 && <h1 style={{ fontSize: '1.3rem', textAlign: 'center', marginTop: '2rem' }}>your cart is empty select some products <Link to='/' style={{ color: "royalblue" }}>here</Link></h1>}
      <div className='cart_container'>
        <div className='cart_product'>
          {data.map(p => {
            return <div key={p.id} className='cart_product-card'>
              <img src={p.image} alt={p.title} />
              <div>
                <h3>{p.title}</h3>
                {/* <p>{p.description.substring(0, 50)}...</p> */}
                <p>${p.price.toFixed(2)} </p>
                <div>
                  <button onClick={() => dispatch(removeToCart(p))}>-</button>
                  <span>{p.quantity}</span>
                  <button onClick={() => dispatch(addToCart(p))}>+</button>
                </div>
                <p>totalPrice: ${p.totalPrice}</p>
              </div>
              {/* <div style={{ color: 'red' }} onClick={dispatch(removeToCart(p.id))}><MdCancel className='cancel' /></div> */}
            </div>
          })}
        </div>
        {!!totalAmount && <div className='checkout_card'>
          <h2>Total Amount</h2>
          <p>Amount ${totalAmount.toFixed(2)}</p>
          <button onClick={handleCheckout}>place order</button>
        </div>}
      </div>
    </div>
  )
}

export default CartProducts