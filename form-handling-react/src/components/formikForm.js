import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

// This is the Yup schema (which you already had)
export const formikSchema = Yup.object().shape({
    username: Yup
        .string()
        .min(3, "Username must be at least 3 characters long")
        .required("Required"),
    email: Yup
        .string()
        .email("Please enter a valid email")
        .required("Required"),
    password: Yup
        .string()
        .min(8, "Password must be at least 8 characters long")
        .matches(/[A-Z]/, "Password must have at least one uppercase")
        .matches(/[a-z]/, "Password must have at least one lowercase")
        .matches(/\d/, "Password must have at least one number")
        .matches(/[@$%!?&]/, "Password must have at least one special character")
        .required("Required")
});

// Default Formik Component Setup
export const FormikForm = ({ initialValues, onSubmit }) => (
    <Formik
        initialValues={initialValues}
        validationSchema={formikSchema}
        onSubmit={onSubmit}
    >
        {formikProps => (
            <Form>
                <div>
                    <label htmlFor="username">Username: </label>
                    <Field
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                    />
                    <ErrorMessage name="username" component="p" />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <Field
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                    />
                    <ErrorMessage name="email" component="p" />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <Field
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                    />
                    <ErrorMessage name="password" component="p" />
                </div>
                <button type="submit" disabled={formikProps.isSubmitting}>Submit</button>
            </Form>
        )}
    </Formik>
);
