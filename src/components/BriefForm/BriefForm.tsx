'use client'

import { useState } from 'react';
import Image from 'next/image';
import { Formik, Form, Field, ErrorMessage as Error, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import { Container } from '../Container/Container';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';

import { IBriefForm } from '@/types/IBriefForm';

import { getClsNames } from '@/utils/helpers';

import img from './img/houses.png';

import styles from './BriefForm.module.scss';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function BriefForm() {
	const initialValues = {
		name: '',
		position: '',
		companyName: '',
		contact: '',
		whatStuffsToUseNow: '',
		marketingWishes: '',
		comment: '',
	}

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Required'),
		position: Yup.string().required('Required'),
		companyName: Yup.string().required('Required'),
		contact: Yup.string().required('Required'),
		whatStuffsToUseNow: Yup.string().required('Required'),
		comment: Yup.string().required('Required'),
	});

	const baseURL = process.env.NEXT_PUBLIC_BASE_URL

	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const submitHandler = async (values: IBriefForm, actions: FormikHelpers<IBriefForm>) => {
		setIsError(false); // Скидаємо попередню помилку перед новим запитом
		setIsLoading(true); // Позначаємо, що почалася відправка запиту

		try {
			const res = await fetch(`${baseURL}/business-form`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(values),
			});

			if (!res.ok) {
				setIsError(true); // Встановлюємо помилку, якщо статус відповіді не є успішним
			} else {
				const data = await res.json();
				console.log(data); // обробка відповіді від сервера
			}
		} catch (error) {
			console.error('Error:', error);
			setIsError(true); // Встановлюємо помилку при виникненні помилки при виконанні запиту
		} finally {
			setIsLoading(false); // Позначаємо, що відправка завершена

			actions.setSubmitting(false); // позначаємо, що відправка завершена у Formik
			actions.resetForm();
		}
	}

	return (
		<section className={styles.section}>
			<Container>

				{isLoading ? (
					<div className={styles.loaderWrapper}>
						<Loader className={styles.loader} />
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
									<label htmlFor='whatStuffsToUseNow'>Які маркетингові канали використовуєте зараз? Які бюджети на просування використовуєте? Чи задоволені результатом?</label>
									<Field name='whatStuffsToUseNow' id='whatStuffsToUseNow' />
									<Error name='whatStuffsToUseNow'>{error => <span className={styles.error}>{error}</span>}</Error>
								</div>

								<div className={getClsNames(styles.inputContainer, [styles.columns_7])}>
									<label htmlFor='marketingWishes'>Які послуги / запит наша агенція може закрити для вас?</label>
									<Field as='select' name='marketingWishes' id='marketingWishes'>
										<option value='target'>таргетована реклама в Instagram та Facebook</option>
										<option value='google-ads'>реклама в Google</option>
										<option value='consulting'>консалтинг</option>
										<option value='strategy'>розробка стратегії</option>
										<option value='other'>інше</option>
									</Field>
									<Error name='marketingWishes'>{error => <span className={styles.error}>{error}</span>}</Error>
								</div>

								<div className={getClsNames(styles.inputContainer, [styles.columns_7])}>
									<label htmlFor='comment'>Залиште коментар</label>
									<Field name='comment' id='comment' />
									<Error name='comment'>{error => <span className={styles.error}>{error}</span>}</Error>
								</div>

								<Image src={img} width={520} height={230} alt='houses' className={styles.image} />

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
