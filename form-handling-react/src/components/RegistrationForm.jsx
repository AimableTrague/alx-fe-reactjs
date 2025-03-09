import React from 'react'
import { Form, Field, Formik } from 'formik'
import { formikSchema } from './formikForm'

const RegistrationForm = () => {
    const onSubmit = async (values, actions) => {
        await new Promise(resolve => setTimeout(resolve, 1000))
        actions.resetForm()
    }

    return (
        <Formik
            initialValues={{ username: '', email: '', password: '' }}
            validationSchema={formikSchema}
            onSubmit={onSubmit}
        >
            {({ isSubmitting, errors, touched }) => (
                <Form autoComplete='off'>
                    <div>
                        <label htmlFor='username'>Username: </label>
                        <Field type='text' name='username' id='username' placeholder='Enter your username' />
                        {touched.username && errors.username && <p>{errors.username}</p>}
                    </div>
                    <div>
                        <label htmlFor='email'>Email: </label>
                        <Field type='email' name='email' id='email' placeholder='Enter your email' />
                        {touched.email && errors.email && <p>{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor='password'>Password: </label>
                        <Field type='password' name='password' id='password' placeholder='Enter your password' />
                        {touched.password && errors.password && <p>{errors.password}</p>}
                    </div>
                    <button type='submit' disabled={isSubmitting}>Submit</button>
                </Form>
            )}
        </Formik>
    )
}

export default RegistrationForm
