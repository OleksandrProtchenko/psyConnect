import { NextRequest, NextResponse } from 'next/server';
import { api, ApiError } from '../api';

export async function GET(request: NextRequest) {
  try {
    const { data } = await api.get('/api/psychologists', {
      params: Object.fromEntries(request.nextUrl.searchParams),
    });

    return NextResponse.json(data);
  } catch (error) {
    const err = error as ApiError;

    console.error('Psychologists API error:', {
      status: err.response?.status,
      data: err.response?.data,
    });

    return NextResponse.json(
      {
        error:
          err.response?.data?.error ??
          err.message ??
          'Failed to fetch psychologists',
      },
      {
        status: err.response?.status ?? 500,
      }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { data } = await api.post(`/api/favorites/${body.id}`, body);
    return NextResponse.json(data);
  } catch (error) {
    const err = error as ApiError;
    console.error('Favorites API error:', {
      status: err.response?.status,
      data: err.response?.data,
    });

    return NextResponse.json(
      {
        error:
          err.response?.data?.error ?? err.message ?? 'Failed to add favorite',
      },
      {
        status: err.response?.status ?? 500,
      }
    );
  }
}
