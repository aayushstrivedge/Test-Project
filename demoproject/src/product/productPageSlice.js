import { createSlice } from "@reduxjs/toolkit";


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
    }
})

export const { sentToProductpage } = productPageSlice.actions;

export default productPageSlice.reducer;