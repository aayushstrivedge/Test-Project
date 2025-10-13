import React from 'react'
import Layout from '../Layout/Layout'
import { Field, Formik, } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { updateDashboard } from './auth/dashboardUpdateSlice'
import { ToastContainer, toast } from 'react-toastify';

const Dashboard = () => {
    let userData = useSelector((state) => state.loginAuth.data[0])
    const dashboardData = useSelector((state) => state.dashboardData.updateData[0])
    console.log(dashboardData);


    const dispatch = useDispatch();
    const currentData = dashboardData || userData;


    const loginController = (values) => {
        dispatch(updateDashboard(values))
        toast.success("User updated successfully")
    }
    console.log(dashboardData);


    return (
        <Layout>
            <ToastContainer />
            <section >
                <div className='loginContainer'>
                    <div>
                        <h1>User Information</h1>
                        <hr />
                        <h1>Name: {currentData?.username}</h1>
                        <h1>Email: {currentData?.email}</h1>
                    </div>
                    <Formik
                        initialValues={{
                            username: currentData?.username || "",
                            email: currentData?.email || "",
                            password: ""
                        }}
                        enableReinitialize
                        onSubmit={loginController}
                    >
                        {({ handleSubmit }) => (

                            <div className='form-container'>

                                <form onSubmit={handleSubmit} className="login-form">
                                    <h1>Update Information</h1>
                                    <label htmlFor="userName" className="form-label">Name</label>
                                    <Field
                                        type="text"
                                        id="userName"
                                        name="username"
                                        className="form-input"
                                    />
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <Field
                                        type="text"
                                        id="email"
                                        name="email"
                                        className="form-input"
                                    />
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <Field
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="form-input"
                                    // placeholder={userData.password}
                                    />
                                    <button type="submit" className="form-submit">Update</button>
                                </form>
                            </div>
                        )}
                    </Formik>
                </div>
            </section>
        </Layout>
    )
}

export default Dashboard
