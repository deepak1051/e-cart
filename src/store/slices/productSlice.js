import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts } from "../thunk/productThunk";

const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    error: null,
    isLoading: false
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllProducts.pending, (state, action) => {
      state.isLoading = true
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload
    });
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error
    })
  }
})

export const productReducer = productSlice.reducer