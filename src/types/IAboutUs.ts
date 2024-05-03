import { IImage } from "./IImage"

export interface IAboutUs {
	createDate: string
	deletedAt: string | null
	description: string
	id: number
	title: string
	updatetAt: string
	image: IImage
}
