'use server'

import { ILogin } from "@/types/ILogin"

const baseURL = process.env.NEXT_PUBLIC_API_KEY

export const login = async (credentials: ILogin) => {
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

    return ({ success: true });
}