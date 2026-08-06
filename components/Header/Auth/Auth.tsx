'use client';

import { AppButton } from '@/components/ui/Button/Button';
import css from './Auth.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Modal from '@/components/Modal/Modal';

export default function Auth() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const authMode = searchParams.get('auth');
  const isAuthModalOpen = authMode === 'login' || authMode === 'signup';

  const buildUrl = (mode?: 'login' | 'signup') => {
    const params = new URLSearchParams(searchParams.toString());

    if (mode) {
      params.set('auth', mode);
    } else {
      params.delete('auth');
    }

    const qs = params.toString();
    return qs ? `${pathname}?${qs}` : pathname;
  };

  const openLogin = () => router.push(buildUrl('login'), { scroll: false });
  const openSignup = () => router.push(buildUrl('signup'), { scroll: false });
  const closeModal = () => router.replace(buildUrl(), { scroll: false });

  return (
    <div className={css.auth}>
      <AppButton onClick={openLogin} data-btn="login">
        Log In
      </AppButton>

      <AppButton variant="secondary" onClick={openSignup} data-btn="signup">
        Sign Up
      </AppButton>

      {isAuthModalOpen && (
        <Modal onClose={closeModal}>
          {authMode === 'login' ? (
            <p>Login form goes here.</p>
          ) : (
            <p>Signup form goes here.</p>
          )}
        </Modal>
      )}
    </div>
  );
}
