import { IImage } from './IImage'

export interface IMember {
	id: number
	officialPosition: string
	internalPosition: string
	name: string
	createdDate: string
	updatedAt: string
	image: IImage
}
