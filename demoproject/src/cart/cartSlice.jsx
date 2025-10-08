import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const getCart = createAsyncThunk("product/getCart", async () => {
    const response = await axios("https://dummyjson.com/carts");
    return response.data.carts[0].products
    // console.log(response);
})

const cartSlice = createSlice({
    name: "cartProduct",
    initialState: {
        products: [],
        title: "",
        quantity: 0,
        price: 0,
        thumbnail: "",
        loading: false,
        error: null
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingProduct = state.cartItem.find((product) => product.id === item.id)

            if (existingProduct) {
                existingProduct.quanntity += 1;
            } else {
                state.cartItem.push({ ...item, quantity: 1 })
            }
            state.quantity += 1
            state.totalPrice += item.price
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCart.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getCart.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload
            })
            .addCase(getCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;