import { NextServer } from '../api';
import type { Favorite } from '../../../types/favorites/favorites';

export async function getFavorites(): Promise<Favorite[]> {
  const { data } = await NextServer.get<Favorite[]>('/api/favorites');
  return data;
}

export async function addFavorite(id: string): Promise<Favorite> {
  const { data } = await NextServer.post<Favorite>(`/api/favorites/${id}`);
  return data;
}
