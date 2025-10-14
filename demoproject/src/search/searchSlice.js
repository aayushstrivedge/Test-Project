import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const searchResults = createAsyncThunk("/searchresults", async (searchinput) => {
    const response = await axios.get(`https://dummyjson.com/products/search?q=${searchinput}`)
    return response.data
})
const searchSlice = createSlice({
    name: "searchResult",
    initialState: {
        results: [],
        loading: false,
        error: null
    },
    reducers: {
        // showResults: (state, action) => {
        //     action.results = [state.payload]
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchResults.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(searchResults.fulfilled, (state, action) => {

                state.loading = false
                state.results = action.payload
            })
            .addCase(searchResults.rejected, (state, action) => {

                state.loading = false
                state.error = action.error.message
            })
    }
})


export const { showResults } = searchSlice.actions
export default searchSlice.reducer