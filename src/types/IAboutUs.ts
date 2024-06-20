import { IImage } from './IImage'

export interface IAboutUs {
	id: string
	title: string
	description: string
	image: IImage
}

export interface ICreateAboutUsBlock {
	titleBlock: string
	descriptionBlock: string
	photo: string
	imageDescription: string
}
