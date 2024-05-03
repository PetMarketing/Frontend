import { ICategory } from '@/app/types/ICategory'

export interface IService {
	id: number
	title: string
	createDate: string
	updatedAt: string
	category: ICategory
}

export interface IGroupedServices {
	[categoryName: string]: IService[];
}
