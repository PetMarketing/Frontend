import { IEvent } from '@/types/IEvent'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const getEvents = async (): Promise<IEvent[]> => {
    try {
        const response = await fetch(`${baseURL}/event`, {
            next: {
                revalidate: 86400 // один день в секундах
            }
        });

        if (!response.ok) throw new Error('Unable to fetch posts.');

        const data = await response.json();

        if (!data.length) throw new Error('No services found.');

        return data;
    } catch (error) {
        console.error('Error:', error);

        throw error;
    }
}