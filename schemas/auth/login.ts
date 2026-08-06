import { object, string, InferType } from 'yup';

export const loginSchema = object({
  email: string().email('Invalid email').required('Required'),
  password: string().min(6, 'Min 6 chars').required('Required'),
});

export type SignInFormData = InferType<typeof loginSchema>;
