'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ErrorMessage as Error, Field, Form, Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup'

import { Container } from '../Container/Container'
import Button from '../Button/Button'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

import { IBriefForm } from '@/types/IBriefForm'

import { getClsNames } from '@/utils/helpers'

import formImg from './img/houses.png'
import successImg from './img/monkey.png'

import styles from './BriefForm.module.scss'

export default function BriefForm() {
	const initialValues = {
		name: '',
		position: '',
		companyName: '',
		contact: '',
		webUrl: '',
		whatStuffsToUseNow: '',
		marketingWishes: '',
		comment: '',
	}

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Required'),
		position: Yup.string().required('Required'),
		companyName: Yup.string().required('Required'),
		contact: Yup.string().required('Required'),
		webUrl: Yup.string().required('Required'),
		whatStuffsToUseNow: Yup.string().required('Required'),
		marketingWishes: Yup.string().required('Required'),
		comment: Yup.string().required('Required'),
	})

	const baseURL = process.env.NEXT_PUBLIC_BASE_URL

	const [isError, setIsError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)

	const submitHandler = async (
		values: IBriefForm,
		actions: FormikHelpers<IBriefForm>,
	) => {
		setIsError(false) // Resetting the previous error before a new request
		setIsLoading(true) // Indicate that the request has been started

		try {
			const res = await fetch(`${baseURL}/business-form`, {
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
		<section className={styles.section}>
			<Container>
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
							alt='Monkey Chaos'
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
						<Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={(values, actions) => submitHandler(values, actions)}
						>
							<Form className={styles.form}>
								<div
									className={getClsNames(styles.inputContainer, [
										styles.columns_4,
										styles.columns_xl_6,
									])}
								>
									<label htmlFor='name'>Name</label>
									<Field name='name' id='name' placeholder='' />
									<Error name='name'>
										{error => <span className={styles.error}>{error}</span>}
									</Error>
								</div>

								<div
									className={getClsNames(styles.inputContainer, [
										styles.columns_4,
										styles.columns_xl_6,
									])}
								>
									<label htmlFor='position'>Position</label>
									<Field name='position' id='position' placeholder='' />
									<Error name='position'>
										{error => <span className={styles.error}>{error}</span>}
									</Error>
								</div>

								<div
									className={getClsNames(styles.inputContainer, [
										styles.columns_4,
									])}
								>
									<label htmlFor='companyName'>Company</label>
									<Field name='companyName' id='companyName' placeholder='' />
									<Error name='companyName'>
										{error => <span className={styles.error}>{error}</span>}
									</Error>
								</div>

								<div
									className={getClsNames(styles.inputContainer, [
										styles.columns_7,
									])}
								>
									<label htmlFor='contact'>
										Contact Information (Telegram / Email / Phone)
									</label>
									<Field name='contact' id='contact' />
									<Error name='contact'>
										{error => <span className={styles.error}>{error}</span>}
									</Error>
								</div>

								<div
									className={getClsNames(styles.inputContainer, [
										styles.columns_7,
									])}
								>
									<label htmlFor='webUrl'>
										Links to the company's website / social networks
									</label>
									<Field name='webUrl' id='webUrl' />
									<Error name='webUrl'>
										{error => <span className={styles.error}>{error}</span>}
									</Error>
								</div>

								<div
									className={getClsNames(styles.inputContainer, [
										styles.columns_7,
									])}
								>
									<label htmlFor='whatStuffsToUseNow'>
										What marketing channels are you currently using? What
										advertising budgets do you use? Are you satisfied with the
										results?
									</label>
									<Field name='whatStuffsToUseNow' id='whatStuffsToUseNow' />
									<Error name='whatStuffsToUseNow'>
										{error => <span className={styles.error}>{error}</span>}
									</Error>
								</div>

								<div
									className={getClsNames(styles.inputContainer, [
										styles.columns_7,
									])}
								>
									<label htmlFor='marketingWishes'>
										What services / requests can our agency fulfill for you?
									</label>
									<Field
										as='select'
										name='marketingWishes'
										id='marketingWishes'
										placeholder='Оберіть опцію'
									>
										<option>Choose the option</option>
										<option value='Targeted advertising on Instagram and Facebook'>
											Targeted advertising on Instagram and Facebook
										</option>
										<option value='Advertising on Google'>
											Advertising on Google
										</option>
										<option value='Consulting'>Consulting</option>
										<option value='Strategy development'>
											Strategy development
										</option>
										<option value='Other'>other</option>
									</Field>
									<Error name='marketingWishes'>
										{error => <span className={styles.error}>{error}</span>}
									</Error>
								</div>

								<div
									className={getClsNames(styles.inputContainer, [
										styles.columns_7,
									])}
								>
									<label htmlFor='comment'>Leave a comment</label>
									<Field name='comment' id='comment' />
									<Error name='comment'>
										{error => <span className={styles.error}>{error}</span>}
									</Error>
								</div>

								<Image
									src={formImg}
									width={520}
									height={230}
									alt='houses'
									className={styles.image}
								/>

								<Button
									variant='primary'
									type='submit'
									className={styles.sendBtn}
								>
									Send
								</Button>
							</Form>
						</Formik>

						{isError && (
							<ErrorMessage err='Something went wrong. Please, contact us or try again later' />
						)}
					</>
				)}
			</Container>
		</section>
	)
}
