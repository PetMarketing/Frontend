
import { IAboutUs } from '@/types/IAboutUs'
import { IService } from '@/types/IService'
import { ISample } from '@/types/ISample'
import { IMember } from '@/types/IMember'
import { IEvent } from '@/types/IEvent'

export interface WhoWeAreStore {
	aboutUs: IAboutUs[] | []
	loading: boolean
	error: string | null
	fetchAboutUs: () => Promise<void>
}

export interface ServicesStore {
	services: IService[] | []
	loading: boolean
	error: string | null
	fetchServices: () => Promise<void>
}

export interface SamplesStore {
	samples: ISample[] | []
	loading: boolean
	error: string | null
	fetchSamples: (category: string) => Promise<void>
}

export interface MembersStore {
	members: IMember[] | []
	loading: boolean
	error: string | null
	fetchMembers: () => Promise<void>
}

export interface EventsStore {
	events: IEvent[] | []
	loading: boolean
	error: string | null
	fetchEvents: () => Promise<void>
}
