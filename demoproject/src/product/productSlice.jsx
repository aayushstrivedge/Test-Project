import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const getProduct = createAsyncThunk("product/getproduct", async () => {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products;
})

const productSlice = createSlice({
    name: "product",
    initialState: {
        product: [],
        loading: false,
        error: null
    },
    reducers: {
        // getProducts: (state, action) => {
        //     const item = action.payload;
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProduct.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

    }
})

export const { getProducts } = productSlice.actions;
export default productSlice.reducer;
