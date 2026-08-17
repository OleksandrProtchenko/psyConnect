import { AuthResponse, LoginRequest, SignupRequest } from '@/types/auth/auth';
import { nextServer } from '../api';
import { CurrentUser, SessionResponse } from '@/types/user/user';

export const register = async (
  regData: SignupRequest
): Promise<AuthResponse> => {
  const { data } = await nextServer.post<AuthResponse>(
    '/api/auth/register',
    regData
  );
  return data;
};

export const login = async (loginData: LoginRequest): Promise<AuthResponse> => {
  const { data } = await nextServer.post<AuthResponse>(
    '/api/auth/login',
    loginData
  );
  return data;
};

export const logout = async (): Promise<void> => {
  await nextServer.post('/api/auth/logout');
};

export const getMe = async (): Promise<CurrentUser> => {
  const { data } = await nextServer.get<CurrentUser>('/api/user/current');
  return data;
};

export const getSession = async (): Promise<boolean> => {
  const { data } = await nextServer.get<SessionResponse>('/api/auth/session');
  return data.isSessionActive;
};
