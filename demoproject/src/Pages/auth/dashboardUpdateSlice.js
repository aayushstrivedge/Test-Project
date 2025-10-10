import { createSlice } from "@reduxjs/toolkit";

const updateDashboardSlice = createSlice({
    name: "dashboardUpdatedData",
    initialState: {
        updateData: [],
        loading: false,
        error: null
    },
    reducers: {
        updateDashboard: ((state, action) => {
            state.updateData = [action.payload]
        })
    },
})

export const { updateDashboard } = updateDashboardSlice.actions;

export default updateDashboardSlice.reducer;