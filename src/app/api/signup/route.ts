import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { trackPlunkEvent } from '@/lib/plunk';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    await sql`
      INSERT INTO waitlist (email, joined_at)
      VALUES (${email}, NOW())
    `;
    
    await trackPlunkEvent('user.created', email);
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    if (error.message?.includes('unique')) {
      return NextResponse.json({ error: 'Already subscribed' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}