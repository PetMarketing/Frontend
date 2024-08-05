'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import { getIronSession } from 'iron-session';

import { defaultSession, sessionOptions } from '@/config/auth';

export const getSession = async () => {
    const session = await getIronSession<ISession>(cookies(), sessionOptions);

    if (!session.user) {
        session.user = defaultSession.user;
    }

    if (!session.user.isOnline) {
        session.user.isOnline = defaultSession.user.isOnline;
    }

    return session;
}

export const createSession = async (data: ISession) => {
    const session = await getSession();

    session.token = data.token;
    session.tokenExpires = data.tokenExpires;
    session.user = data.user;

    await session.save();
}

export const removeSession = async () => {
    const session = await getSession();

    session.destroy()

    redirect('/');
}
