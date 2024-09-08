import { getSession } from '@/services/auth/auth.service';

export async function fetchWithAuth<T>(endpoint: string, data?: unknown, method: 'GET' | 'POST' | 'PATCH' | 'DELETE' = 'GET') {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    const session = await getSession();

    const token = session.token;
    const tokenExpires = session.tokenExpires || 0;

    const currentUnixTimestamp = Math.floor(Date.now() / 1000);

    if (currentUnixTimestamp  >= tokenExpires) {
        throw new Error('Token has expired');
    }

    const options = {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: data ? JSON.stringify(data) : undefined
    };

    try {
        const response = await fetch(`${baseURL}/${endpoint}`, options);

        if (!response.ok) throw new Error('Network response was not ok');

        return response.json();
    } catch (error) {
        console.error('Error:', error);

        throw error;
    }
}
