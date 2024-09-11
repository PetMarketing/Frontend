'use client'

import { useState } from 'react'
import { ErrorMessage as Error, Form, Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup'

import styles from './styles.module.scss'

import Button from '../Button/Button'
import FormikInput from '../FormikInput/FormikInput'
import Loader from '@/components/Loader/Loader'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage'

import { userUpdate } from '@/services/user/user.service'

interface IProps {
	user: IUser
}

export default function UserSettingsForm({ user }: IProps) {
	const [isError, setIsError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')

	const initialValues = {
		name: user.name!,
		email: user.email!,
	}

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Required'),
		email: Yup.string().required('Email is required').email('Invalid email format'),
	})

	const submitHandler = async (
		values: IUserUpdate,
		actions: FormikHelpers<IUserUpdate>,
	) => {
		setIsError(false) // Resetting the previous error before a new request
		setIsLoading(true) // Indicate that the request has been started
		setErrorMessage('') // Reset the previous error message

		try {
			await userUpdate(values)

			setIsSuccess(true)
		} catch (error) {
			setIsError(true)
			setErrorMessage((error as Error).message || 'An error occurred')
		} finally {
			setIsLoading(false)
			actions.setSubmitting(false)
		}
	}

	return (
		<div className={`${styles.wrapper} ${isLoading ? styles.loading : ''}`}>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values, actions) => submitHandler(values, actions)}
			>
				<Form className={styles.form}>
					<FormikInput
						className={styles.input}
						type='text'
						name='name'
						id='name'
						label='User Name'
					/>

					<FormikInput
						className={styles.input}
						type='email'
						name='email'
						id='email'
						label='Email'
					/>

					{isSuccess ? (
						<Button
							className={styles.button}
							text='Changes saved'
							variant='black'
						/>
					) : (
						<Button className={styles.button} text='Save' type='submit' />
					)}
				</Form>
			</Formik>

			<Loader className={styles.loader} />

			{isError && <ErrorMessage err={errorMessage} />}
		</div>
	)
}
