import { NextRequest, NextResponse } from 'next/server';

import { getSession } from './services/auth/auth.service';

export async function middleware(request: NextRequest) {
    const session = await getSession();

    if (!session.user.isOnline) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*'],
};
