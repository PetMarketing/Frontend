import { ITeamFormData } from '@/types/IFormData'

export const createFormData = (values: ITeamFormData): FormData => {
	const formData = new FormData()
	formData.append('name', values.name)
	formData.append('email', values.email)
	formData.append('position', values.position)
	formData.append('description', values.description)
	if (values.imagePath) {
		formData.append('imagePath', values.imagePath)
	}
	return formData
}
