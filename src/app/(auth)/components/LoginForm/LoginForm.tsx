'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage as Error, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import styles from './LoginForm.module.scss';

import Loader from '@/components/Loader/Loader';
import Button from '@/components/Button/Button';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';

import { createSession } from '@/services/auth/auth.service';

export default function LoginForm() {
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const form = document.getElementById('login-form') as HTMLFormElement | null;

        if (form) {
            const emailInput = form.querySelector('input[name="email"]') as HTMLInputElement | null;
            const passwordInput = form.querySelector('input[name="password"]') as HTMLInputElement | null;

            if (emailInput) setEmail(emailInput.value);
            if (passwordInput) setPassword(passwordInput.value);
        }
    }, []);

    const initialValues = {
        email,
        password,
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(4, 'The password must contain at least 4 characters').required('Required'),
    });

    const submitHandler = async (values: ILogin, actions: FormikHelpers<ILogin>) => {
        setIsError(false); // Resetting the previous error before a new request
        setIsLoading(true); // Indicate that the request has been started
        setErrorMessage(''); // Reset the previous error message

        const baseURL = process.env.NEXT_PUBLIC_API_KEY

        try {
            const res = await fetch(`${baseURL}/admin/login`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            const data = await res.json();

            if (!res.ok) {
                setIsError(true);
                setErrorMessage(data.message || 'Something went wrong. Please try again later.');
                return;
            }

            // Processing a successful login
            createSession(data);

        } catch (error) {
            setIsError(true);
            setErrorMessage('Something went wrong. Please try again later.');

            console.error('error: ', error);
        } finally {
            actions.setSubmitting(false); // Mark that the sending is completed in Formik
            actions.resetForm();

            setIsLoading(false); // Indicate that the request has ended
        }
    }

    return (
        <div className={`${styles.wrapper} ${isLoading ? styles.loading : ''}`}>
            <h1 className={styles.title}>Login to Account</h1>
            <p className={styles.subtitle}>Please enter your email and password to continue</p>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values, actions) => submitHandler(values, actions)}>
                <Form className={styles.form} id='login-form'>
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

            {isError && <ErrorMessage err={errorMessage} />}

            <Link href={'/'} className={styles.homeLink}>Go to Home</Link>
        </div >
    )
}
