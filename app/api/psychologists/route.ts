import { NextRequest, NextResponse } from 'next/server';
import { api, ApiError } from '../api';

export async function GET(request: NextRequest) {
  try {
    const { data } = await api.get(
      `/psychologists?${request.nextUrl.searchParams.toString()}`
    );
    return NextResponse.json(data);
  } catch (error) {
    const err = error as ApiError;
    return NextResponse.json(
      { error: err.response?.data?.error ?? err.message },
      { status: err.status ?? 500 }
    );
  }
}
