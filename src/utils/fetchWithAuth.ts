import { getSession } from '@/services/auth/auth.service'

export async function fetchWithAuth<T>(
	endpoint: string,
	data?: FormData | Record<string, any>,
	method: 'GET' | 'POST' | 'PATCH' | 'DELETE' = 'GET',
) {
	const baseURL = process.env.NEXT_PUBLIC_BASE_URL

	const session = await getSession()

	const token = session.token
	const tokenExpires = session.tokenExpires || 0

	const currentUnixTimestamp = Math.floor(Date.now() / 1000)

	if (currentUnixTimestamp >= tokenExpires) {
		throw new Error('Token has expired')
	}

	const isFormData = data instanceof FormData

	const options = {
		method,
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`,
		} as Record<string, string>,
		body: isFormData ? data : data ? JSON.stringify(data) : undefined,
	}

	if (!isFormData) {
		options.headers!['Content-Type'] = 'application/json' // Додаємо Content-Type тільки для JSON
	}

	try {
		const response = await fetch(`${baseURL}/${endpoint}`, options)

		if (!response.ok) throw new Error('Network response was not ok')

		return response.json()
	} catch (error) {
		console.error('Error:', error)

		throw error
	}
}
