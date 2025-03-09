import React from 'react';
import FormikForm from './formikForm';

const RegistrationForm = () => {
    const handleSubmit = async (values, actions) => {
        // Your custom submit logic here (e.g., API call)
        console.log('Form Submitted:', values);

        // Simulate async operation (like API call)
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Reset form and state after submission
        actions.resetForm();
    };

    return (
        <div>
            <h2>Register</h2>
            <FormikForm onSubmit={handleSubmit} />
        </div>
    );
};

export default RegistrationForm;
