import React, { useState } from 'react';
import { FormikForm } from './formikForm'; // Import FormikForm

const RegistrationForm = () => {
    // Controlled components setup
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (values, actions) => {
        // Basic validation logic: Check if username, email, or password is empty
        if (!values.username || !values.email || !values.password) {
            actions.setErrors({ 
                username: !values.username ? 'Username is required' : '',
                email: !values.email ? 'Email is required' : '',
                password: !values.password ? 'Password is required' : ''
            });
            return;
        }

        // Simulate async operation (e.g., API call)
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Form submitted successfully:', values);

        // Reset form after submission
        actions.resetForm();
        setUsername('');
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <FormikForm 
                initialValues={{ username, email, password }}
                onSubmit={handleSubmit} 
            />
        </div>
    );
};

export default RegistrationForm;
