'use client'

import { useState } from 'react';
import Image from 'next/image';
import { Formik, Form, Field, ErrorMessage as Error, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import { Container } from '../Container/Container';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import { IBriefForm } from '@/types/IBriefForm';

import { getClsNames } from '@/utils/helpers';

import formImg from './img/houses.png';
import successImg from './img/monkey.png';

import styles from './BriefForm.module.scss';

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
	});

	const baseURL = process.env.NEXT_PUBLIC_BASE_URL

	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	const submitHandler = async (values: IBriefForm, actions: FormikHelpers<IBriefForm>) => {
		setIsError(false); // Resetting the previous error before a new request
		setIsLoading(true); // Indicate that the request has been started

		try {
			const res = await fetch(`${baseURL}/business-form`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(values),
			});

			if (!res.ok) {
				setIsError(true); // Set an error if the response status is not successful
			} else {
				setIsSuccess(true); // Set success state upon successful form submission

				actions.resetForm();
			}
		} catch (error) {
			console.error('Error:', error);
			setIsError(true); // Set an error when an error occurs when executing a request
		} finally {
			setIsLoading(false); // Indicate that the shipment is complete

			actions.setSubmitting(false); // Mark that the sending is completed in Formik
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
							Успішно<br />надіслано!
						</p>

						<Image src={successImg} width={722} height={379} alt='Monkey Chaos' className={styles.successImage} />

						<p className={styles.successText}>
							Скоро ми вам<br />напишемо:)
						</p>
					</div>
				) : (
					<>
						<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values, actions) => submitHandler(values, actions)}>
							<Form className={styles.form}>
								<div className={getClsNames(styles.inputContainer, [styles.columns_4, styles.columns_xl_6, styles.floatingLabel])}>
									<Field name='name' id='name' placeholder='' />
									<label htmlFor='name'>Ім&apos;я</label>
									<Error name='name'>{error => <span className={styles.error}>{error}</span>}</Error>
								</div>

								<div className={getClsNames(styles.inputContainer, [styles.columns_4, styles.columns_xl_6, styles.floatingLabel])}>
									<Field name='position' id='position' placeholder='' />
									<label htmlFor='position'>Посада</label>
									<Error name='position'>{error => <span className={styles.error}>{error}</span>}</Error>
								</div>

								<div className={getClsNames(styles.inputContainer, [styles.columns_4, styles.floatingLabel])}>
									<Field name='companyName' id='companyName' placeholder='' />
									<label htmlFor='companyName'>Назва компанії</label>
									<Error name='companyName'>{error => <span className={styles.error}>{error}</span>}</Error>
								</div>

								<div className={getClsNames(styles.inputContainer, [styles.columns_7])}>
									<label htmlFor='contact'>Контакт для звʼязку (Телеграм / Пошта / Телефон)</label>
									<Field name='contact' id='contact' />
									<Error name='contact'>{error => <span className={styles.error}>{error}</span>}</Error>
								</div>

								<div className={getClsNames(styles.inputContainer, [styles.columns_7])}>
									<label htmlFor='webUrl'>Посилання на сайт / соцмережі компанії</label>
									<Field name='webUrl' id='webUrl' />
									<Error name='webUrl'>{error => <span className={styles.error}>{error}</span>}</Error>
								</div>

								<div className={getClsNames(styles.inputContainer, [styles.columns_7])}>
									<label htmlFor='whatStuffsToUseNow'>Які маркетингові канали використовуєте зараз? Які бюджети на просування використовуєте? Чи задоволені результатом?</label>
									<Field name='whatStuffsToUseNow' id='whatStuffsToUseNow' />
									<Error name='whatStuffsToUseNow'>{error => <span className={styles.error}>{error}</span>}</Error>
								</div>

								<div className={getClsNames(styles.inputContainer, [styles.columns_7])}>
									<label htmlFor='marketingWishes'>Які послуги / запит наша агенція може закрити для вас?</label>
									<Field as='select' name='marketingWishes' id='marketingWishes' placeholder='Оберіть опцію'>
										<option>Choose the option</option>
										<option value='таргетована реклама в Instagram та Facebook'>таргетована реклама в Instagram та Facebook</option>
										<option value='реклама в Google'>реклама в Google</option>
										<option value='консалтинг'>консалтинг</option>
										<option value='розробка стратегії'>розробка стратегії</option>
										<option value='інше'>інше</option>
									</Field>
									<Error name='marketingWishes'>{error => <span className={styles.error}>{error}</span>}</Error>
								</div>

								<div className={getClsNames(styles.inputContainer, [styles.columns_7])}>
									<label htmlFor='comment'>Залиште коментар</label>
									<Field name='comment' id='comment' />
									<Error name='comment'>{error => <span className={styles.error}>{error}</span>}</Error>
								</div>

								<Image src={formImg} width={520} height={230} alt='houses' className={styles.image} />

								<Button variant='primary' type='submit' className={styles.sendBtn}>
									Надіслати
								</Button>
							</Form>
						</Formik>

						{isError && <ErrorMessage err='Something went wrong. Please, contact us or try again later' />}
					</>
				)}
			</Container>
		</section >
	)
}