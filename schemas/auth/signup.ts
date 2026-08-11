import { object, string, InferType, ref } from 'yup';

export const signupSchema = object({
  name: string().min(2, 'Min 2 chars').required('Name is required'),
  email: string().email('Invalid email').required('Please enter a valid email'),
  password: string()
    .min(6, 'Min 6 chars')
    .required(`Password must be at least 6 characters`),
});

export type SignUpFormData = InferType<typeof signupSchema>;
