import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const singleProduct = createAsyncThunk("/products/id", async (id) => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`)
    return response.data
})


const productPageSlice = createSlice({
    name: "productPage",
    initialState: {
        individualProduct: [],
        loading: false,
        error: null,
        clearProduct: null
    },
    reducers: {
        sentToProductpage: ((state, action) => {
            state.individualProduct = [action.payload];
        })
    },
    extraReducers: (builder) => {
        builder
            .addCase(singleProduct.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(singleProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.individualProduct = action.payload
            })
            .addCase(singleProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

    }
})

export const { sentToProductpage } = productPageSlice.actions;

export default productPageSlice.reducer;