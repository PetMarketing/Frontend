import { IAboutUs } from '@/types/IAboutUs'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const getAboutUs = async (): Promise<IAboutUs[]> => {
    try {
        const response = await fetch(`${baseURL}/who-we-are`, {
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