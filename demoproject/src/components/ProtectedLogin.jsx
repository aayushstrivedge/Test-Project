import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {

    const location = useLocation()
    const navigate = useNavigate();


    const auth = localStorage.getItem("auth")

    if (auth) {
        return <Navigate to={"/"} state={{ from: location }} replace />
    }
    return children

}

export default ProtectedRoute
