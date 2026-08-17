import { Favorite } from '../favorites/favorites';

export type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
};

export type CurrentUser = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  favorites: Favorite[];
};

export type SessionResponse = {
  isSessionActive: boolean;
};
