import { object, string, InferType, ref } from 'yup';

export const signupSchema = object({
  name: string().min(2, 'Min 2 chars').required('Required'),
  email: string().email('Invalid email').required('Required'),
  password: string().min(6, 'Min 6 chars').required('Required'),
  confirmPassword: string()
    .oneOf([ref('password')], 'Passwords do not match')
    .required('Required'),
});

export type SignUpFormData = InferType<typeof signupSchema>;
