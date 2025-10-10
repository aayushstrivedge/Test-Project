import { createSlice } from "@reduxjs/toolkit";


const toDoList = createSlice({
    name: "todoListItems",
    initialState: {
        listItems: [],
        loading: false,
        error: null
    },
    reducers: {
        addListitem: ((state, action) => {
            state.listItems.push(action.payload)
        })
    }
})


export const { addListitem } = toDoList.actions;

export default toDoList.reducer