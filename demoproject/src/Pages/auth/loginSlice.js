import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: "loginAuth",
    initialState: {
        data: null,
        error: null,
    },
    reducers: {
        loginData: (state, actions) => {
            state.data = [actions.payload]

            try {
                alert("Login Successfully")

            } catch (error) {
                console.log(error);
                alert("Invalid Credentials")
            }
        }
    }

})


export const { loginData } = loginSlice.actions;

export default loginSlice.reducer;