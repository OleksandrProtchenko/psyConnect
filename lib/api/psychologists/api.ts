import { NextServer } from '../api';
interface GetPsychologistsParams {
  specialization?: string;
  approach?: string;
  priceMax?: number;
  page?: number;
  limit?: number;
}

export async function getPsychologists(params: GetPsychologistsParams = {}) {
  const { specialization, approach, priceMax, page = 1, limit = 4 } = params;

  const { data } = await NextServer.get('/api/psychologists', {
    params: {
      specialization,
      approach,
      price_max: priceMax,
      page,
      limit,
    },
  });

  return data;
}
