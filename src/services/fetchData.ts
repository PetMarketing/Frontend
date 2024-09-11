import { IEvent } from '@/types/IEvent'
import { IAboutUs } from '@/types/IAboutUs'
import { IService } from '@/types/IService'
import { IMember } from '@/types/IMember'

export async function fetchData<T>(endpoint: string): Promise<T> {
	const baseURL = process.env.NEXT_PUBLIC_BASE_URL
	try {
		const response = await fetch(`${baseURL}/${endpoint}`, {
			next: {
				revalidate: 1800,
			},
		})

		if (!response.ok) throw new Error('Unable to fetch posts.')

		const data = await response.json()

		return data
	} catch (error) {
		console.error('Error:', error)
		throw error
	}
}

export const getEvents = async (): Promise<IEvent[]> => {
	return await fetchData<IEvent[]>('event')
}

export const getEventsById = async (id: string): Promise<IEvent> => {
	return await fetchData<IEvent>(`event/${id}`)
}

export const getAboutUs = async (): Promise<IAboutUs[]> => {
	return await fetchData<IAboutUs[]>('who-we-are')
}

export const getServices = async (): Promise<IService[]> => {
	return await fetchData<IService[]>('services')
}

export const getMembers = async (): Promise<IMember[]> => {
	return await fetchData<IMember[]>('member')
}
