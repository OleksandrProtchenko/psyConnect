import { nextServer } from '../api';
import type { Favorite } from '../../../types/favorites/favorites';

export async function getFavorites(): Promise<Favorite[]> {
  const { data } = await nextServer.get<Favorite[]>('/api/favorites');
  return data;
}

export async function addFavorite(id: string): Promise<Favorite> {
  const { data } = await nextServer.post<Favorite>(`/api/favorites/${id}`);
  return data;
}
