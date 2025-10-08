import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cartProduct",
    initialState: {
        products: [],
        title: "",
        quantity: 0,
        price: 0,
        loading: false,
        error: null
    },
    reducers: {
        addToCart: (state, action) => {
            state.products.push(action.payload)
        },
        removeCart: (state, action) => {
            state.products = []
        }

    },

})

export const { addToCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;