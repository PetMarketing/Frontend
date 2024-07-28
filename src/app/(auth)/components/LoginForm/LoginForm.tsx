'use client'

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage as Error, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import styles from './LoginForm.module.scss';

import Loader from '@/components/Loader/Loader';
import Button from '@/components/Button/Button';

import { login } from '@/services/auth/auth.service';

import { ILogin } from '@/types/ILogin';


export default function LoginForm() {
    const router = useRouter();

    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const initialValues = {
        email: '',
        password: '',
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(4, 'The password must contain at least 4 characters').required('Required'),
    });

    const submitHandler = async (values: ILogin, actions: FormikHelpers<ILogin>) => {
        setIsError(false); // Resetting the previous error before a new request
        setIsLoading(true); // Indicate that the request has been started
        setErrorMessage(''); // Reset the previous error message

        const res = await login(values);
        console.log('res: ', res);
    }

    return (
        <div className={`${styles.wrapper} ${isLoading ? styles.loading : ''}`}>
            <h1 className={styles.title}>Login to Account</h1>
            <p className={styles.subtitle}>Please enter your email and password to continue</p>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values, actions) => submitHandler(values, actions)}>
                <Form className={styles.form}>
                    <div className={styles.inputContainer}>
                        <label htmlFor='email'>Email address:</label>
                        <Field name='email' id='email' placeholder='' autoComplete='off' />
                        <Error name='email'>{error => <span className={styles.error}>{error}</span>}</Error>
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor='password'>Password: <a href='#' className={styles.resetPasswordLink}>Forget Password?</a></label>
                        <Field name='password' id='password' type='password' placeholder='' autoComplete='off' />
                        <Error name='password'>{error => <span className={styles.error}>{error}</span>}</Error>
                    </div>

                    <Button variant='primarySquare' type='submit' className={styles.sendBtn}>
                        Send
                    </Button>
                </Form>
            </Formik >

            <Loader className={styles.loader} />

            {isError && (
                <div className={styles.error}>{errorMessage}</div>
            )}

            <Link href={'/'} className={styles.homeLink}>Go to Home</Link>
        </div >
    )
}
