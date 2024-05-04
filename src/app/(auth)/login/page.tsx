'use client'

import { Formik, Form, Field, ErrorMessage as Error, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import Button from '@/components/Button/Button';

import { ILogin } from '@/types/ILogin';

import styles from './page.module.scss'
import Link from 'next/link';

const initialValues = {
	email: '',
	password: '',
}

const validationSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string().min(8, 'Пароль повинен містити щонайменше 8 символів').required('Required'),
});

const submitHandler = (values: ILogin, actions: FormikHelpers<ILogin>) => {
	console.log('values: ', values);

	actions.resetForm();
}

export default function Login() {
	return (
		<div className={styles.login}>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>Login to Account</h1>
				<p className={styles.subtitle}>Please enter your email and password to continue</p>

				<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values, actions) => submitHandler(values, actions)}>
					<Form className={styles.form}>
						<div className={styles.inputContainer}>
							<label htmlFor="email">Email address:</label>
							<Field name="email" id="email" placeholder="" />
							<Error name="email">{error => <span className={styles.error}>{error}</span>}</Error>
						</div>

						<div className={styles.inputContainer}>
							<label htmlFor="password">Password: <a href="#" className={styles.resetPasswordLink}>Forget Password?</a></label>
							<Field name="password" id="password" type="password" placeholder="" />
							<Error name="password">{error => <span className={styles.error}>{error}</span>}</Error>
						</div>

						<Button variant='primarySquare' type='submit' className={styles.sendBtn}>
							Надіслати
						</Button>
					</Form>
				</Formik >

				<Link href={'/'} className={styles.homeLink}>Go to Home</Link>
			</div >
		</div >
	)
}

