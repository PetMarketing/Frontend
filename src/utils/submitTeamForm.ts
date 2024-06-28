import { ITeamFormData } from '@/types/IFormData'
import { createFormData } from './createFormData'

const apiKey = process.env.NEXT_PUBLIC_API_KEY

export const submitTeamForm = async (
	values: ITeamFormData,
	setLoading: (loading: boolean) => void,
	setShowSentConfirm: (show: boolean) => void,
): Promise<void> => {
	setLoading(true)

	try {
		const formDataToSend = createFormData(values)

		const response = await fetch(`${apiKey}/team-form`, {
			method: 'POST',
			body: formDataToSend,
		})

		if (response.ok) {
			setShowSentConfirm(true)
		} else {
			console.error('Error submitting form:', response.statusText)
		}
	} catch (error) {
		console.error('Error submitting form:', error)
	} finally {
		setLoading(false)
	}
}
