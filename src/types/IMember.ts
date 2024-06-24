import { IImage } from './IImage'
import { ISocial } from './ISocial'

export interface IMember {
	id: number
	name: string
	department: string
	position: string
	image: IImage
	social?: ISocial
}
