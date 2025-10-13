import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const paymentData = createAsyncThunk("payment/checkout", async (values, { rejectWithValue }) => {

    try {
        const response = await axios.get(`https://dummyjson.com/users/filter?key=bank.cardNumber&value=${values.cardnumber}`)
        console.log(response.data.users[0].bank.cardNumber);
        return response.data;
    } catch (error) {
        console.error(error);
    }

})
const paymentDataSlice = createSlice({
    name: "payment",
    initialState: {
        cardData: null,
        loading: false,
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(paymentData.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(paymentData.fulfilled, (state, action) => {
                state.loading = false;
                state.cardData = action.payload
            })
            .addCase(paymentData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            })

    }
})

// export const { storePaymentData } = paymentDataSlice.actions;
export default paymentDataSlice.reducer;