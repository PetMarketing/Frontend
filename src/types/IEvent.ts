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
	image: ISpeakerImage
}

interface ISpeakerImage {
	id: number
	description: string
	imagePath: string
}
