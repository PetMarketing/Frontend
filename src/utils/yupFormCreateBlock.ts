import * as Yup from 'yup'
import { ValidationError } from 'yup'

const MaxSise = 5242880

export const validationSchema = Yup.object({
	titleBlock: Yup.string()
		.min(2, 'Title must be at least 2 characters')
		.max(60, 'Title must be at most 64 characters')
		.required('Title is required'),
	descriptionBlock: Yup.string()
		.min(2, 'Block text must be at least 2 characters')
		.max(60, 'Block text must be at most 120 characters')
		.required('Block text is required'),
	photo: Yup.mixed()
		.required('Photo is required')
		.test('fileSize', 'The photo size must not be greater than 5 Mb', value => {
			return value && (value as File).size <= MaxSise
		})
		.test('fileType', 'The photo format must be jpeg/jpg type', value => {
			return value && ['image/jpeg', 'image/jpg'].includes((value as File).type)
		})
		.test('fileDimensions', 'Minimum size of photo 70x70px', async value => {
			if (!value) throw new ValidationError('Value is required')
			return new Promise<boolean>((resolve, reject) => {
				const img = new Image()
				img.src = URL.createObjectURL(value as File)
				img.onload = () => {
					URL.revokeObjectURL(img.src)
					if (img.width >= 70 && img.height >= 70) {
						resolve(true)
					} else {
						reject(new ValidationError('Photo dimensions must be at least 70x70px'))
					}
				}
				img.onerror = () => {
					reject(new ValidationError('Failed to load image'))
				}
			})
		}),
	imageDescription: Yup.string()
		.min(2, 'Image description must be at least 2 characters')
		.max(60, 'Image description must be at most 120 characters')
		.required('Image description is required'),
})
