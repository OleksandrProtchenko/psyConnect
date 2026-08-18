'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';
import { getMe, getSession } from '@/lib/api/auth/api';

type Props = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
  const setUser = useAuthStore(state => state.setUser);
  const clearIsAuthed = useAuthStore(state => state.clearIsAuthed);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const isAuthed = await getSession();
        if (isAuthed) {
          const user = await getMe();
          if (user) setUser(user);
        }
      } catch {
        clearIsAuthed();
      }
    };

    fetchUser();
  }, [setUser, clearIsAuthed]);

  return <>{children}</>;
}
