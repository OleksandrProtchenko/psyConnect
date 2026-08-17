import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    return NextResponse.json({ isSessionActive: false }, { status: 401 });
  }

  return NextResponse.json({ isSessionActive: true });
}
