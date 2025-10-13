import React from 'react'
import Layout from '../../Layout/Layout';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserData } from './dashboard';
import { loginData } from './loginSlice';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const loginController = async (values, { setSubmitting }) => {
        setSubmitting(true)

        try {
            dispatch(loginData(values))
            await dispatch(getUserData(values)).unwrap();
            localStorage.setItem("auth", JSON.stringify(values))
            toast.success("Login Successfull")
            navigate('/dashboard');

        } catch (error) {
            console.log(error);
            toast.error("Invalid Credentials.");
            setSubmitting(false)
        }
    }
    const validate = values => {
        const error = {};
        if (!values.username && !values.password) {
            error.password = " Fields cant be empty - required"
        }
        return error;
    }
    return (
        <Layout>
            <ToastContainer />
            <Formik
                initialValues={{
                    username: "",
                    email: "",
                    password: ""
                }}
                validate={validate}
                onSubmit={loginController}
            >
                {({ isSubmitting }) => (
                    <div className="form-container">
                        <Form className="login-form">
                            <h1>Login</h1>

                            <label htmlFor="username" className="form-label">Name</label>
                            <Field
                                type="text"
                                id="userName"
                                name="username"
                                className="form-input"
                            />
                            <ErrorMessage component="div" name='email' />
                            <label htmlFor="email" className="form-label">Email</label>
                            <Field
                                type="text"
                                id="email"
                                name="email"
                                className="form-input"
                            />
                            <ErrorMessage component="div" name='email' />

                            <label htmlFor="password" className="form-label">Password</label>
                            <Field
                                type="password"
                                id="password"
                                name="password"
                                className="form-input"
                            />
                            <ErrorMessage component="div" name='password' />
                            <button type="submit" className="form-submit" disabled={isSubmitting}>
                                {isSubmitting ? "Submitting..." : "Login"}
                            </button>
                        </Form>
                    </div>
                )}
            </Formik>
        </Layout>
    )
}

export default Login
