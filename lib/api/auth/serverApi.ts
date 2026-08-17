import { AxiosResponse } from 'axios';
import { CurrentUser, SessionResponse } from '@/types/user/user';
import { cookies } from 'next/headers';
import { nextServer } from '../api';

export const checkSession = async (): Promise<
  AxiosResponse<SessionResponse>
> => {
  const cookieStore = await cookies();
  const response: AxiosResponse<SessionResponse> =
    await nextServer.get<SessionResponse>('/api/auth/session', {
      headers: {
        Cookie: cookieStore.toString(),
      },
    });

  return response;
};

export const getMe = async (): Promise<CurrentUser> => {
  const cookieStore = await cookies();
  const { data } = await nextServer.get<CurrentUser>('/api/users/current', {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return data;
};
