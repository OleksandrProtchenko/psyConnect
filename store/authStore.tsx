import { CurrentUser } from '@/types/user/user';
import { create } from 'zustand';

type AuthStore = {
  user: CurrentUser | null;
  isAuthenticated: boolean;
  setUser: (user: CurrentUser) => void;
  clearIsAuthed: () => void;
};

export const useAuthStore = create<AuthStore>(set => ({
  user: null,
  isAuthenticated: false,
  setUser: user => set({ user, isAuthenticated: true }),
  clearIsAuthed: () => set({ user: null, isAuthenticated: false }),
}));
