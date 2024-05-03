import { ICategory } from '@/app/types/ICategory'

export interface ISample {
	id: number
	category: ICategory
	imagePath: string
	imageAlt: string
	title: string
	client: string
	challenge: string
	collaborate: string
	createdDate: string
	updatedAt: string
}
