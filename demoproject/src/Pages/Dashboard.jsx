import React from 'react'
import Layout from '../Layout/Layout'
import { Field, Formik, } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { updateDashboard } from './auth/dashboardUpdateSlice'

const Dashboard = () => {
    const userData = useSelector((state) => state.loginAuth.data[0])
    const dashboardData = useSelector((state) => state.dashboardData)

    console.log(dashboardData);

    const dispatch = useDispatch();

    const loginController = (values) => {
        dispatch(updateDashboard(values))
        console.log(values);
    }
    return (
        <Layout>
            <section >
                <div className='loginContainer'>
                    <div>
                        <h1>User Information</h1>
                        <hr />
                        <h1>Name : {userData.username}</h1>
                        <h1>Email : {userData.email}</h1>
                    </div>
                    <Formik
                        initialValues={{
                            username: "",
                            email: "",
                            password: ""
                        }}
                        onSubmit={loginController}
                    >
                        {() => (
                            <div className='form-container'>
                                <form action={""} className="login-form">
                                    <h1>Update Information</h1>
                                    <label htmlFor="userName" className="form-label">Name</label>
                                    <Field
                                        type="text"
                                        id="userName"
                                        name="username"
                                        className="form-input"
                                        placeholder={userData.username}
                                    />
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <Field
                                        type="text"
                                        id="email"
                                        name="email"
                                        className="form-input"
                                        placeholder={userData.email}
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
