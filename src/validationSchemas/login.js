import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Please enter a valid email address')
        .required('Email is required'),

    password: yup.string()
        .min(8, `Password too short, must be at least 8 characters`)
        .max(50,`Password too large, must be at most 50 characters`)
        .required('Password is required')
    })
