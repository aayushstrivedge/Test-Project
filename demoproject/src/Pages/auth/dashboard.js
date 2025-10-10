import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getUserData = createAsyncThunk("dashboard/user", async (values) => {
    const response = await axios.post("https://dummyjson.com/user/login", values, {
        headers: { 'Content-Type': 'application/json' }
    })
    return response.data;
})


const dashboardPage = createSlice({
    name: "dashboard",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        dashboardData: ((state, action) => {
            state.dashboard = [action.payload]
        })
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserData.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getUserData.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload;
            })
            .addCase(getUserData.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export const { dashboardData } = dashboardPage.actions;
export default dashboardPage.reducer;