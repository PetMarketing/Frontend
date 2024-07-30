'use client'

import { useState } from 'react';
import Image from 'next/image'
import { Formik, Form, Field, ErrorMessage as Error, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import Loader from '@/components/Loader/Loader';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import FormikInput from '../components/FormikInput/FormikInput';
import Button from '../components/Button/Button';

import styles from './page.module.scss'

interface IFormProps {
	name: string;
	email: string;
}

export default async function SettingsPage() {
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const initialValues = {
		name: '',
		email: '',
	}

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Required'),
		email: Yup.string().required('Email is required').email('Invalid email format'),
	});

	const baseURL = process.env.NEXT_PUBLIC_BASE_URL

	const submitHandler = async (values: IFormProps, actions: FormikHelpers<IFormProps>) => {
		setIsError(false); // Resetting the previous error before a new request
		setIsLoading(true); // Indicate that the request has been started
		setErrorMessage(''); // Reset the previous error message	

		console.log(values);
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

										{
											isSuccess ? (
												<Button className={styles.button} text='Changes saved' variant='black' />
											) : (
												<Button className={styles.button} text='Save' type='submit' />
											)
										}
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
