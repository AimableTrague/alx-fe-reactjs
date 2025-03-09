import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // Import Yup

// Define Yup validation schema
const formikSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string().required('Password is required'),
});

const FormikForm = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{ username: '', email: '', password: '' }}
            validationSchema={formikSchema} // Pass Yup schema to Formik
            onSubmit={async (values, actions) => {
                await onSubmit(values, actions);
            }}
        >
            {formik => (
                <Form>
                    <div>
                        <label htmlFor="username">Username: </label>
                        <Field
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Enter your username"
                        />
                        <ErrorMessage name="username" component="p" />
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <Field
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                        />
                        <ErrorMessage name="email" component="p" />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <Field
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                        />
                        <ErrorMessage name="password" component="p" />
                    </div>
                    <button type="submit" disabled={formik.isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default FormikForm;
