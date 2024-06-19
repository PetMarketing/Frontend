import { IImage } from './IImage'

export interface IMember {
	id: number
	name: string
	department: string
	position: string
	image: IImage
}
