'use server'

import { cookies } from "next/headers"
import { redirect } from "next/navigation";
import { getIronSession } from "iron-session";

import { defaultSession, sessionOptions } from "@/config/auth";

const baseURL = process.env.NEXT_PUBLIC_API_KEY

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

export const login = async (credentials: ILogin) => {
    const session = await getSession();

    const res = await fetch(`${baseURL}/admin/login`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });

    const data = await res.json();

    if (!res.ok) {
        return data;
    }

    session.token = data.token;
    session.tokenExpires = data.tokenExpires;
    session.user = data.user;

    await session.save();

    redirect('/dashboard');
}

export const logout = async () => {
    const session = await getSession();

    session.destroy()

    redirect("/");
}