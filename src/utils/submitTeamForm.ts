import { ITeamFormData } from '@/types/IFormData'

const apiKey = process.env.NEXT_PUBLIC_API_KEY

export const submitTeamForm = async (
	values: ITeamFormData,
	setLoading: (loading: boolean) => void,
	setShowSentConfirm: (show: boolean) => void,
): Promise<void> => {
	try {
		setLoading(true)

		const formDataToSend = new FormData()
		formDataToSend.append('name', values.name)
		formDataToSend.append('email', values.email)
		formDataToSend.append('position', values.position)
		formDataToSend.append('description', values.description)
		values.imagePath && formDataToSend.append('imagePath', values.imagePath)

		const response = await fetch(`${apiKey}/team-form`, {
			method: 'POST',
			body: formDataToSend,
		})

		response.ok && setShowSentConfirm(true)
	} catch (error) {
		console.error('Error submitting form:', error)
	} finally {
		setLoading(false)
	}
}
