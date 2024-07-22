import { IImage } from './IImage'

export interface IEvent {
	id: number
	name: string
	date: string
	location: string
	speakers: ISpeaker[]
}

interface ISpeaker {
	id: number
	name: string
	imagePath: string
	imageAlt: string
}
