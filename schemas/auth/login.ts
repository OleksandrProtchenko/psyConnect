import { object, string, InferType } from 'yup';

export const loginSchema = object({
  email: string().email('Invalid email').required('Please enter a valid email'),
  password: string()
    .min(6, 'Min 6 chars')
    .required('Please enter a valid password'),
});

export type SignInFormData = InferType<typeof loginSchema>;
