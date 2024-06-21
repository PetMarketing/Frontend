import { FormikProps } from 'formik'

import { ICreateAboutUsBlock } from './IAboutUs'

export interface IGenericInputContainerProps {
	formik: FormikProps<ICreateAboutUsBlock>
	labelText: string
	name: string
	value?: string
	placeholder?: string
	touched?: boolean
	error?: string
}
