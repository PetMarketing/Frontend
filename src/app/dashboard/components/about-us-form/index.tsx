'use client'

import { useState } from 'react';
import { Form, Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup'

import Loader from '@/components/Loader/Loader';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import FormikInput from '../FormikInput/FormikInput';
import Button from '../Button/Button';

import { ISession } from '@/types/ISession';

import styles from './styles.module.scss'


export default function AboutUsForm() {
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const initialValues = {
        title: '',
        description: '',
        imageAlt : '',
        imagePath: '',
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        imageAlt: Yup.string().required('Required'),
        imagePath: Yup.mixed().required('Image is required')
    });

    const submitHandler = async (values: any, actions: any) => {
        setIsError(false); // Resetting the previous error before a new request
        setIsLoading(true); // Indicate that the request has been started
        setErrorMessage(''); // Reset the previous error message

        console.log('values')
    }

    return (
        isLoading ? (
            <div className={styles.loaderWrapper} >
                <Loader className={styles.loader} />
            </div>
        ) : (
            <>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values, actions) => submitHandler(values, actions)}>
                    <Form className={styles.form}>
                        <FormikInput className={styles.input} type='text' name='title' id='title' label='Title' />

                        <FormikInput className={styles.input} type='text' name='description' id='description' label='Description' />

                        <FormikInput className={styles.input} type='file' name='image' id='image' label='Image' accept='image/jpeg,image/jpg' />

                        <FormikInput className={styles.input} type='text' name='imageAlt' id='imageAlt' label='Image description' />

                        <Button className={styles.button} text='Add new block' type='submit' />
                    </Form>
                </Formik>

                {isError && <ErrorMessage err={errorMessage} />}
            </>
        )
    )
}
