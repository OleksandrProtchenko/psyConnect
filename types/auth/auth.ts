import type { User } from '@/types/user/user';

export type AuthMode = 'login' | 'signup';

export type AuthFormValues = {
  email: string;
  password: string;
  name?: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type SignupRequest = {
  name: string;
  email: string;
  password: string;
};

export type AuthResponse = {
  user: User;
};
