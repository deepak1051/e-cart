import { configureStore, } from "@reduxjs/toolkit";
import { addToCart, removeToCart, resetCart, cartReducer } from "./slices/cartSlice";
import { productReducer } from './slices/productSlice'
import { fetchAllProducts } from "./thunk/productThunk";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer
  }
})

export { store, addToCart, removeToCart, resetCart, fetchAllProducts }

