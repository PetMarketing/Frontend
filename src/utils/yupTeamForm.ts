import * as Yup from 'yup'
import { ValidationError } from 'yup'

// name: string
// position: string
// email: string
// description: string
// : string

export const validationSchema = Yup.object({
	name: Yup.string()
		.min(2, 'Name be at least 2 characters')
		.max(60, 'Name be at most 64 characters')
		.required('Name is required'),
	position: Yup.string()
		.min(2, 'Position be at least 2 characters')
		.max(60, 'Position be at most 64 characters')
		.required('Position is required'),
	email: Yup.string()
		.email('Invalid email address')
		.required('Email is required')
		.matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Invalid email address'),
	description: Yup.string()
		.min(2, 'Description must be at least 2 characters')
		.max(60, 'Description must be at most 120 characters')
		.required('Description is required'),
	imagePath: Yup.string().required('Image description is required'),
})
