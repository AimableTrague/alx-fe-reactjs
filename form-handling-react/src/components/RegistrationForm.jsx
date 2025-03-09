import React, { useState } from 'react';
import { useFormik } from 'formik';
import { formikSchema } from './formikForm';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const formik = useFormik({
        initialValues: { username: '', email: '', password: '' },
        validationSchema: formikSchema,
        onSubmit: async (values, actions) => {
            // Basic validation logic
            if (!values.username) {
                actions.setErrors({ username: 'Username is required' });
                return;
            }
            if (!values.email) {
                actions.setErrors({ email: 'Email is required' });
                return;
            }
            if (!values.password) {
                actions.setErrors({ password: 'Password is required' });
                return;
            }

            // Simulate async operation
            await new Promise(resolve => setTimeout(resolve, 1000));
            actions.resetForm();
            setUsername('');
            setEmail('');
            setPassword('');
        }
    });

    return (
        <form onSubmit={formik.handleSubmit} autoComplete="off">
            <div>
                <label htmlFor="username">Username: </label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                        formik.handleChange(e);
                    }}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.username && formik.errors.username && <p>{formik.errors.username}</p>}
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        formik.handleChange(e);
                    }}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        formik.handleChange(e);
                    }}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && <p>{formik.errors.password}</p>}
            </div>
            <button type="submit" disabled={formik.isSubmitting}>Submit</button>
        </form>
    );
}

export default RegistrationForm;
