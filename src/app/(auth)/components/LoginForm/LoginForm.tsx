'use client'

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Formik, Form, Field, ErrorMessage as Error, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import Button from '@/components/Button/Button';

import { ILogin } from '@/types/ILogin';

import styles from './LoginForm.module.scss';



export default function LoginForm() {
    const initialValues = {
        email: '',
        password: '',
    }

    // ToDo: the password must contain one capital letter, one digit and one special character
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(4, 'Пароль повинен містити щонайменше 4 символів').required('Required'),
    });

    const router = useRouter();

    const submitHandler = async (values: ILogin, actions: FormikHelpers<ILogin>) => {
        const res = await signIn('credentials', {
            email: values.email,
            password: values.password,
            redirect: false,
        })

        if (res && !res.error) {
            router.push('/dashboard');
        } else {
            console.error(res);
        }

        actions.resetForm();
    }

    return (
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
    )
}
