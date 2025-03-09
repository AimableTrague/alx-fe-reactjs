import React from 'react'
import { useFormik } from 'formik'
import { formikSchema } from './formikForm'

const RegistrationForm = () => {
    const formik = useFormik({
        initialValues: { username: '', email: '', password: '' },
        validationSchema: formikSchema,
        onSubmit: async (values, actions) => {
            await new Promise(resolve => setTimeout(resolve, 1000))
            actions.resetForm()
        }
    })
    
    return (
        <form onSubmit={formik.handleSubmit} autoComplete='off'>
            <div>
                <label htmlFor='username'>Username: </label>
                <input 
                    type='text' 
                    name='username' 
                    id='username' 
                    placeholder='Enter your username'
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.username && formik.errors.username && <p>{formik.errors.username}</p>}
            </div>
            <div>
                <label htmlFor='email'>Email: </label>
                <input 
                    type='email' 
                    name='email' 
                    id='email' 
                    placeholder='Enter your email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
            </div>
            <div>
                <label htmlFor='password'>Password: </label>
                <input 
                    type='password' 
                    name='password' 
                    id='password' 
                    placeholder='Enter your password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && <p>{formik.errors.password}</p>}
            </div>
            <button type='submit' disabled={formik.isSubmitting}>Submit</button>
        </form>
    )
}

export default RegistrationForm
