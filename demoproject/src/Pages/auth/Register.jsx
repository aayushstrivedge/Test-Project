import React from 'react'
import Layout from '../../Layout/Layout'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Register = () => {
    return (
        <Layout>
            <Formik
                initialValues={{
                    username: "",
                    password: "",
                    address: "",
                    phoneNumber: ""
                }}
                onSubmit={(values) => {
                    console.log("The form value is:", values);
                }}
            >
                {() => (
                    <div className="form-container">
                        <Form className="login-form">
                            <h1>Register</h1>

                            <label htmlFor="userName" className="form-label">Name</label>
                            <Field
                                type="text"
                                id="userName"
                                name="username"
                                className="form-input"
                            />

                            <label htmlFor="password" className="form-label">Password</label>
                            <Field
                                type="password"
                                id="password"
                                name="password"
                                className="form-input"
                            />

                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <Field
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                className="form-input"
                            />

                            <label htmlFor="address" className="form-label">Address</label>
                            <Field
                                type="text"
                                id="address"
                                name="address"
                                className="form-input"
                            />

                            <button type="submit" className="form-submit">Register</button>
                        </Form>
                    </div>
                )}
            </Formik>
        </Layout>
    )
}

export default Register
