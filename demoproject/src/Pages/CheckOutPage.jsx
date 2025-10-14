import React from 'react'
import Layout from '../Layout/Layout'
import { ErrorMessage, Field, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { paymentData } from '../cart/checkoutSlice'
import { useNavigate } from 'react-router-dom'
import { removeCart } from '../cart/cartSlice'
import { toast, ToastContainer } from 'react-toastify';

const CheckOutPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const checoutCOntroller = async (values, { setSubmitting }) => {
        setSubmitting(true)
        try {
            const result = await dispatch(paymentData(values))
                .unwrap()
            if (!result?.users || result.users.length === 0) {
                toast.error("Card details are Invalid!.");
                setSubmitting(false)
                return
            }
            const savedCardNumber = result.users[0]?.bank?.cardNumber;

            if (savedCardNumber === values.cardnumber) {
                toast.success("Payment successful!");

                // Clear the cart
                dispatch(removeCart());

                // Navigate after 3 seconds
                setTimeout(() => {
                    navigate("/cart");
                }, 3000);
            } else {
                toast.error("Card details do not match!");
            }
        } catch (error) {
            console.error("Payment error:", error);
            toast.error("Payment failed. Please try again.");
        } finally {
            setSubmitting(false);
        }
    }
    const validate = values => {
        const error = {};

        if (!values.cardnumber && !values.cardExpire) {
            error.cardExpire = "Input boxes cant be empty";
        }
        return error
    }
    return (
        <Layout>
            <ToastContainer />
            <div className='checkoutContainer'>
                <Formik
                    initialValues={{
                        cardnumber: "",
                        cardExpire: ""
                    }}
                    enableReinitialize

                    validate={validate}
                    onSubmit={checoutCOntroller}
                >
                    {({ handleSubmit, isSubmitting }) => (

                        <form onSubmit={handleSubmit}>
                            <h1>Checkout </h1>
                            <label htmlFor="cardnumber" className="form-label">cardNumber</label>
                            <Field
                                type="text"
                                id="cardnumber"
                                name="cardnumber"
                                className="form-input"
                            />
                            <ErrorMessage component="div" name='cardnumber' />
                            <label htmlFor="cardExpire" className="form-label">cardExpire</label>
                            <Field
                                type="text"
                                id="cardExpire"
                                name="cardExpire"
                                className="form-input"
                            />
                            <ErrorMessage component="div" name='cardExpire' />
                            <button type="submit" className="form-submit" disabled={isSubmitting}>
                                {isSubmitting ? "Submitting..." : "Checkout"}
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </Layout >
    )
}

export default CheckOutPage
