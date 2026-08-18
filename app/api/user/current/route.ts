import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { backendServer } from '@/lib/api/api';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('accessToken')?.value;

    const { data } = await backendServer.get('/users/current', {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    });

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch current user' },
      { status: 401 }
    );
  }
}
