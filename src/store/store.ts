import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { EventsStore, MembersStore, SamplesStore, ServicesStore, WhoWeAreStore } from '@/store/storeTypes'

const apiKey = process.env.NEXT_PUBLIC_API_KEY

export const useWhoWeAreStore = create<WhoWeAreStore>()(
	devtools(set => ({
		aboutUs: [],
		loading: false,
		error: null,
		fetchAboutUs: async () => {
			try {
				set({ loading: true })
				const response = await fetch(`${apiKey}/who-we-are`)
				const data = await response.json()
				set({ aboutUs: data, loading: false })
			} catch (error) {
				set({ error: (error as Error).message, loading: false })
			}
		},
	})),
)

export const useServicesStore = create<ServicesStore>()(
	devtools(set => ({
		services: [],
		loading: false,
		error: null,
		fetchServices: async () => {
			try {
				set({ loading: true })
				const response = await fetch(`${apiKey}/services`)
				const data = await response.json()
				set({ services: data, loading: false })
			} catch (error) {
				set({ error: (error as Error).message, loading: false })
			}
		},
	})),
)

export const useSamplesStore = create<SamplesStore>()(
	devtools(set => ({
		samples: [],
		loading: false,
		error: null,
		fetchSamples: async (category: string) => {
			try {
				set({ loading: true })
				const response = await fetch(`${apiKey}/what-is-done/${category}`)
				const data = await response.json()
				set({ samples: data, loading: false })
			} catch (error) {
				set({ error: (error as Error).message, loading: false })
			}
		},
	})),
)

export const useMembersStore = create<MembersStore>()(
	devtools(set => ({
		members: [],
		loading: false,
		error: null,
		fetchMembers: async () => {
			try {
				set({ loading: true })
				const response = await fetch(`${apiKey}/member`)
				const data = await response.json()
				set({ members: data, loading: false })
			} catch (error) {
				set({ error: (error as Error).message, loading: false })
			}
		},
	})),
)

export const useEventsStore = create<EventsStore>()(
	devtools(set => ({
		events: [],
		loading: false,
		error: null,
		fetchEvents: async () => {
			try {
				set({ loading: true })
				const response = await fetch(`${apiKey}/event`)
				const data = await response.json()
				set({ events: data, loading: false })
			} catch (error) {
				set({ error: (error as Error).message, loading: false })
			}
		},
	})),
)
