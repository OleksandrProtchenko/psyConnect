'use client';

import { AppButton } from '@/components/ui/Button/Button';
import css from './Auth.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import LoginModal from '@/components/ui/Modal/LoginModal/LoginModal';
import SignupModal from '@/components/ui/Modal/SignUpModal/SignUpModal';
import { logout } from '@/lib/api/auth/api';
import { useAuthStore } from '@/store/authStore';

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

  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  console.log('isAuthenticated:', isAuthenticated);

  const openLogin = () => router.push(buildUrl('login'), { scroll: false });
  const openSignup = () => router.push(buildUrl('signup'), { scroll: false });
  const closeModal = () => router.back();
  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  return (
    <div className={css.auth}>
      {!isAuthenticated && (
        <>
          <AppButton onClick={openLogin}>Log In</AppButton>

          <AppButton variant="secondary" onClick={openSignup}>
            Sign Up
          </AppButton>
        </>
      )}

      {isAuthModalOpen && (
        <>
          {authMode === 'login' && <LoginModal onClose={closeModal} />}
          {authMode === 'signup' && <SignupModal onClose={closeModal} />}
        </>
      )}

      {isAuthenticated && (
        <AppButton variant="secondary" onClick={handleLogout}>
          Logout
        </AppButton>
      )}
    </div>
  );
}
