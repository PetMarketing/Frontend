import * as Yup from 'yup'

const emailRegExp =
	/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/

export const validationSchema = Yup.object({
	name: Yup.string()
		.min(3, 'Name be at least 3 characters')
		.max(20, 'Name be at most 20 characters')
		.required('Name is required'),
	position: Yup.string()
		.min(2, 'Position be at least 2 characters')
		.max(30, 'Position be at most 30 characters')
		.required('Position is required'),
	email: Yup.string()
		.email('Invalid email address')
		.required('Email is required')
		.min(14, 'Email be at least 14 symbols')
		.max(72, 'Email be at most 30 symbols')
		.matches(emailRegExp, 'Invalid email address'),
	description: Yup.string()
		.min(2, 'Description must be at least 2 characters')
		.max(1500, 'Description must be at most 1500 characters')
		.required('Description is required'),
	imagePath: Yup.string().required('Image description is required'),
})
