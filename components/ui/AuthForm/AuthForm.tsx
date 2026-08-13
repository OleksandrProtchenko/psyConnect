'use client';

import { AppButton } from '@/components/ui/Button/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from '@/schemas/auth/login';
import { signupSchema } from '@/schemas/auth/signup';
import type { AuthFormValues, AuthMode } from '@/types/auth/auth';
import { Icon } from '@/components/ui/Icon/Icon';
import css from './AuthForm.module.css';

type AuthFormProps = {
  mode: AuthMode;
  onSuccess?: () => void;
};

export default function AuthForm({ mode, onSuccess }: AuthFormProps) {
  const isSignup = mode === 'signup';

  const initialValues: AuthFormValues = isSignup
    ? { name: '', email: '', password: '' }
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
        <Form className={css.form}>
          {isSignup && (
            <div className={css.formGroup}>
              <label className={css.formLabel} htmlFor="name">
                Name
              </label>
              <Field
                type="text"
                className={css.formInput}
                id="name"
                name="name"
                placeholder="Enter your name"
                autoComplete="name"
                autoCapitalize="off"
              />
              <ErrorMessage name="name">
                {message => (
                  <div className={css.error}>
                    <Icon
                      name="error"
                      className={css.errorIcon}
                      width={12}
                      height={12}
                      aria-hidden="true"
                    />
                    <span>{message}</span>
                  </div>
                )}
              </ErrorMessage>
            </div>
          )}

          <div className={css.formGroup}>
            <label className={css.formLabel} htmlFor="email">
              Email
            </label>
            <Field
              className={css.formInput}
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              autoCapitalize="off"
            />
            <ErrorMessage name="email">
              {message => (
                <div className={css.error}>
                  <Icon
                    name="error"
                    className={css.errorIcon}
                    width={12}
                    height={12}
                    aria-hidden="true"
                  />
                  <span>{message}</span>
                </div>
              )}
            </ErrorMessage>
          </div>

          <div className={css.formGroup}>
            <label className={css.formLabel} htmlFor="password">
              {isSignup ? 'Create a password' : 'Enter your password'}
            </label>
            <Field
              className={css.formInput}
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="password"
              autoCapitalize="off"
            />
            <ErrorMessage name="password">
              {message => (
                <div className={css.error}>
                  <Icon
                    name="error"
                    className={css.errorIcon}
                    width={12}
                    height={12}
                    aria-hidden="true"
                  />
                  <span>{message}</span>
                </div>
              )}
            </ErrorMessage>
          </div>

          {status && <p>{status}</p>}

          <AppButton type="submit" disabled={isSubmitting} variant="secondary">
            {isSignup ? 'Create account' : 'Log In'}
          </AppButton>
        </Form>
      )}
    </Formik>
  );
}
