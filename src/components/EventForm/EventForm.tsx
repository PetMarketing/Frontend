'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ErrorMessage as Error, Field, Form, Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup'

import Button from '../Button/Button'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

import { IEventfForm } from '@/types/IEventfForm'

import { getClsNames } from '@/utils/helpers'

import { dela } from '@/styles/fonts/fonts'

import successImg from './img/cats_approved.jpg'

import styles from './EventForm.module.scss'

interface IEventFormProps {
	eventId: string
}

export default function EventForm({ eventId }: IEventFormProps) {
	const initialValues = {
		name: '',
		email: '',
		phone: '',
		eventId: Number(eventId),
	}

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Name is required'),
		email: Yup.string().required('Email is required').email('Invalid email format'),
		phone: Yup.string()
			.required('Phone is required')
			.matches(/^\+380\d{9}$/, 'Phone must be in the format +380XXXXXXXXX'),
	})

	const baseURL = process.env.NEXT_PUBLIC_BASE_URL

	const [isError, setIsError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)

	const submitHandler = async (
		values: IEventfForm,
		actions: FormikHelpers<IEventfForm>,
	) => {
		setIsError(false) // Resetting the previous error before a new request
		setIsLoading(true) // Indicate that the request has been started

		try {
			const res = await fetch(`${baseURL}/event-form`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(values),
			})

			if (!res.ok) {
				setIsError(true) // Set an error if the response status is not successful
			} else {
				setIsSuccess(true) // Set success state upon successful form submission

				actions.resetForm()
			}
		} catch (error) {
			console.error('Error:', error)
			setIsError(true) // Set an error when an error occurs when executing a request
		} finally {
			setIsLoading(false) // Indicate that the shipment is complete

			actions.setSubmitting(false) // Mark that the sending is completed in Formik
		}
	}

	return (
		<div className={styles.eventForm}>
			{isLoading ? (
				<div className={styles.loaderWrapper}>
					<Loader className={styles.loader} />
				</div>
			) : isSuccess ? (
				<div className={styles.successWrapper}>
					<p className={styles.successText}>
						Successfully
						<br />
						sent!
					</p>

					<Image
						src={successImg}
						width={722}
						height={379}
						alt='Cats Approved'
						className={styles.successImage}
					/>

					<p className={styles.successText}>
						Soon we will write
						<br />
						to you:)
					</p>
				</div>
			) : (
				<>
					<h2 className={getClsNames(styles.title, [dela.className])}>
						I want to go!
					</h2>

					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={(values, actions) => submitHandler(values, actions)}
					>
						<Form className={styles.form}>
							<div
								className={getClsNames(styles.inputContainer, [
									styles.floatingLabel,
								])}
							>
								<Field name='name' id='name' placeholder='' />
								<label htmlFor='name'>Name</label>
								<Error name='name'>
									{error => <span className={styles.error}>{error}</span>}
								</Error>
							</div>

							<div
								className={getClsNames(styles.inputContainer, [
									styles.floatingLabel,
								])}
							>
								<Field name='email' id='email' placeholder='' />
								<label htmlFor='email'>Email Address</label>
								<Error name='email'>
									{error => <span className={styles.error}>{error}</span>}
								</Error>
							</div>

							<div
								className={getClsNames(styles.inputContainer, [
									styles.floatingLabel,
								])}
							>
								<Field name='phone' id='phone' placeholder='' />
								<label htmlFor='phone'>Phone number</label>
								<Error name='phone'>
									{error => <span className={styles.error}>{error}</span>}
								</Error>
							</div>

							<Button variant='primary' type='submit' className={styles.sendBtn}>
								Buy
							</Button>
						</Form>
					</Formik>

					{isError && (
						<ErrorMessage err='Something went wrong. Please, contact us or try again later' />
					)}
				</>
			)}
		</div>
	)
}
