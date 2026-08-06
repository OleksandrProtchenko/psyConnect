'use client';

import { AppButton } from '@/components/ui/Button/Button';
import css from './Auth.module.css';
import { useRouter } from 'next/navigation';

export default function Auth() {
  const router = useRouter();

  return (
    <div className={css.auth}>
      <AppButton onClick={() => router.push('/login')} data-btn="login">
        Log In
      </AppButton>
      <AppButton
        variant="secondary"
        onClick={() => router.push('/signup')}
        data-btn="signup"
      >
        Sign Up
      </AppButton>
    </div>
  );
}
