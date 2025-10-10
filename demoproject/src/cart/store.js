import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../cart/cartSlice"
import productReducer from "../product/productSlice"
import listitemsReducer from "../toDoListSlice/toDoListSlice"
import productPageReducer from "../product/productPageSlice"
import loginDataReducer from "../Pages/auth/loginSlice"
import dashBoardReducer from "../Pages/auth/dashboard"
import updatedDashboardReducer from "../Pages/auth/dashboardUpdateSlice"

export const store = configureStore({
    reducer: {
        cartProduct: cartReducer,
        products: productReducer,
        listitems: listitemsReducer,
        productPage: productPageReducer,
        loginAuth: loginDataReducer,
        dashboard: dashBoardReducer,
        dashboardData: updatedDashboardReducer
    }
})