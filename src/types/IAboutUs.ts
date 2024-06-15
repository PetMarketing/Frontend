import { IImage } from './IImage'

export interface IAboutUs {
	id: string
	title: string
	description: string
	image: IImage
}

export interface ICreateAboutUsBlock {
	title: string
	textBlock: string
	photo: File | null
	imageDescription: string
}
