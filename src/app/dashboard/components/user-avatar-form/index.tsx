'use client'

import { ChangeEvent, useRef, useState } from 'react'
import Image from 'next/image'
import { Form, Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup'

import ErrorMessage from '@/components/ErrorMessage/ErrorMessage'

import styles from './styles.module.scss'

interface IProps {
	user: IUser
}

export default function UserAvatarForm({ user }: IProps) {
	const [isError, setIsError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')
	const [avatarSrc, setAvatarSrc] = useState(
		user.imagePath ? user.imagePath : '/default-avatar.svg',
	)

	const avatarAlt = user.imageAlt ? user.imageAlt : 'admin avatar'

	const fileInputRef = useRef<HTMLInputElement>(null)

	const handleAvatarChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files.length > 0) {
			const file = event.target.files[0]

			const imageUrl = URL.createObjectURL(file)

			setAvatarSrc(imageUrl) // Оновлюємо стейт для попереднього перегляду
		}
	}

	const initialValues = {
		imageAlt: 'admin avatar',
		imagePath: '',
	}

	const validationSchema = Yup.object().shape({
		imageAlt: Yup.string().required('Required'),
	})

	const submitHandler = async (
		values: IUserAvatarUpdate,
		actions: FormikHelpers<IUserAvatarUpdate>,
	) => {
		setIsError(false) // Resetting the previous error before a new request
		setIsLoading(true) // Indicate that the request has been started
		setErrorMessage('') // Reset the previous error message

		const formData = new FormData()

		formData.append('imageAlt', values.imageAlt)
		formData.append('imagePath', values.imagePath)

		try {
			console.log(formData)
			// await userAvatarUpdate(formData);
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
				{({ setFieldValue, submitForm }) => (
					<Form className={styles.form}>
						<div className={styles.imageWrapper}>
							<Image
								src={avatarSrc}
								width={80}
								height={80}
								alt={avatarAlt}
								className={styles.image}
							/>
						</div>

						<input
							type='file'
							accept='image/*'
							ref={fileInputRef}
							className={styles.fileInput}
							onChange={event => {
								handleAvatarChange(event)

								const file = event.target.files ? event.target.files[0] : null

								if (file) {
									setFieldValue('imagePath', file) // Оновлюємо значення поля imagePath у Formik
									submitForm()
								}
							}}
						/>

						<button
							type='button'
							className={styles.button}
							onClick={() => fileInputRef.current?.click()}
						>
							Edit Photo
						</button>
					</Form>
				)}
			</Formik>

			{isError && <ErrorMessage err={errorMessage} />}
		</div>
	)
}
