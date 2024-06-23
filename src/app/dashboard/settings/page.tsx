'use client'

import { useState } from 'react';
import Image from 'next/image'
import { useSession } from 'next-auth/react';
import { Formik, Form, Field, ErrorMessage as Error, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import Loader from '@/components/Loader/Loader';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import FormikInput from '../components/FormikInput/FormikInput';
import Button from '../components/Button/Button';

import styles from './page.module.scss'

interface IUpdateAdminProfileForm {
	name: string;
	email: string;
}

export default function SettingsPage() {
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const { data: session, status } = useSession();

	if (status === 'loading') {
		return (
			<div className={styles.pageLoaderWrapper}>
				<Loader className={styles.loader} />
			</div>
		);
	}

	const initialValues = {
		name: session?.user.name || '',
		email: session?.user.email || '',
	}

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Required'),
		email: Yup.string().required('Email is required').email('Invalid email format'),
	});

	const baseURL = process.env.NEXT_PUBLIC_BASE_URL

	const submitHandler = async (values: IUpdateAdminProfileForm, actions: FormikHelpers<IUpdateAdminProfileForm>) => {
		setIsError(false); // Resetting the previous error before a new request
		setIsLoading(true); // Indicate that the request has been started
		setErrorMessage(''); // Reset the previous error message	

		try {
			const tokenExpires = session?.tokenExpires || 0; // Get the token expiration timestamp

			// Check if the token is expired
			if (Date.now() >= tokenExpires) {
				setErrorMessage('Token Expired');
			}

			const res = await fetch(`${baseURL}/admin/me`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${session?.token}`, // Add a token to the headers
				},
				body: JSON.stringify(values),
			});

			const data = await res.json();

			if (!res.ok) {
				const errorMessage = data?.message || 'Unknown Error';

				setIsError(true); // Set an error if the response status is not successful
				setErrorMessage(errorMessage);
			} else {
				setIsSuccess(true); // Set success state upon successful form submission

				actions.resetForm();
			}
		} catch (error) {
			console.error('Error:', error);

			setIsError(true); // Set an error when an error occurs when executing a request
			setErrorMessage('Something went wrong. Please, contact us or try again later');
		} finally {
			setIsLoading(false); // Indicate that the shipment is complete

			actions.setSubmitting(false); // Mark that the sending is completed in Formik
		}
	}

	return (
		<div className={styles.page}>
			<h3 className={styles.title}>Settings</h3>

			<div className={styles.editorBlock}>
				<div className={styles.formWrapper}>
					<div className={styles.editImage}>
						<div className={styles.imageWrapper}>
							<Image src='/default-avatar.svg' width={80} height={80} alt='avatar' className={styles.image} />
						</div>

						<button className={styles.editImageBtn}>Edit Photo</button>
					</div>

					<div className={styles.editInfo}>
						{isLoading ? (
							<div className={styles.loaderWrapper}>
								<Loader className={styles.loader} />
							</div>
						) : (
							<>
								<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values, actions) => submitHandler(values, actions)}>
									<Form className={styles.form}>
										<FormikInput className={styles.input} type='text' name='name' id='name' label='User Name' />

										<FormikInput className={styles.input} type='email' name='email' id='email' label='Email' />

										<Button className={styles.button} text='Save' type='submit' />
									</Form>
								</Formik>

								{isError && <ErrorMessage err={errorMessage} />}
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
