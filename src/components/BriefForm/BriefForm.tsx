'use client'

import Image from 'next/image';
import { Formik, Form, Field, ErrorMessage as Error } from 'formik';
import * as Yup from 'yup';

import { Container } from '../Container/Container';
import Button from '../Button/Button';

import { getClsNames } from '@/utils/helpers';

import img from './img/houses.png';

import styles from './BriefForm.module.scss';

const initialValues = {
	name: '',
	position: '',
	companyName: '',
	contact: '',
	whatStuffsToUseNow: '',
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

export default function BriefForm() {
	return (
		<section className={styles.section}>
			<Container>
				<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={values => console.log('values', values)}>
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
			</Container>
		</section >
	)
}
