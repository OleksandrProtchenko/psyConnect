'use client';

import { AppButton } from '@/components/ui/Button/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from '@/schemas/auth/login';
import { signupSchema } from '@/schemas/auth/signin';
import type { AuthFormValues, AuthMode } from '@/types/auth/auth';

type AuthFormProps = {
  mode: AuthMode;
  onSuccess?: () => void;
};

export default function AuthForm({ mode, onSuccess }: AuthFormProps) {
  const isSignup = mode === 'signup';

  const initialValues: AuthFormValues = isSignup
    ? { name: '', email: '', password: '', confirmPassword: '' }
    : { email: '', password: '' };

  const validationSchema = isSignup ? signupSchema : loginSchema;

  const handleSubmit = async (values: AuthFormValues) => {
    const endpoint = isSignup ? '/api/auth/register' : '/api/auth/login';

    const payload = isSignup
      ? { name: values.name, email: values.email, password: values.password }
      : { email: values.email, password: values.password };

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => null);
      throw new Error(err?.message || 'Request failed');
    }

    onSuccess?.();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, setStatus }) => {
        try {
          setStatus(null);
          await handleSubmit(values);
        } catch (e) {
          setStatus(e instanceof Error ? e.message : 'Something went wrong');
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, status }) => (
        <Form>
          {isSignup && (
            <div>
              <label htmlFor="name">Name</label>
              <Field id="name" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>
          )}

          <div>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field id="password" name="password" type="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          {isSignup && (
            <div>
              <label htmlFor="confirmPassword">Confirm password</label>
              <Field
                id="confirmPassword"
                name="confirmPassword"
                type="password"
              />
              <ErrorMessage name="confirmPassword" component="div" />
            </div>
          )}

          {status && <p>{status}</p>}

          <AppButton type="submit" disabled={isSubmitting} variant="secondary">
            {isSignup ? 'Create account' : 'Log In'}
          </AppButton>
        </Form>
      )}
    </Formik>
  );
}
