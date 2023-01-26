import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const fetchAllProducts = createAsyncThunk('products/fetch', async () => {
  const { data } = await axios.get('https://fakestoreapi.com/products')
  return data
})


export { fetchAllProducts }