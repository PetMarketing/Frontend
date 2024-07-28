'use client'

import { useState } from 'react';
import { Form, Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup'

import Loader from '@/components/Loader/Loader';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import FormikInput from '../FormikInput/FormikInput';
import Button from '../Button/Button';

import { ISession } from '@/types/ISession';

import styles from './NewTeamMemberForm.module.scss'

interface IProps {
    session?: ISession | null;
}

interface IFormData {
    name: string,
    department: string,
    position: string,
    imageId: number,
}

export default function NewTeamMemberForm({ session }: IProps) {
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const initialValues = {
        name: '',
        department: '',
        position: '',
        imageId: 1,
        // image: null,
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        department: Yup.string().required('Required'),
        position: Yup.string().required('Required'),
        // image: Yup.mixed().required('Image is required'),
    });

    const baseURL = process.env.NEXT_PUBLIC_BASE_URL

    const submitHandler = async (values: IFormData, actions: FormikHelpers<IFormData>) => {
        setIsError(false); // Resetting the previous error before a new request
        setIsLoading(true); // Indicate that the request has been started
        setErrorMessage(''); // Reset the previous error message	

        try {
            const tokenExpires = session?.tokenExpires || 0; // Get the token expiration timestamp

            // Check if the token is expired
            if (Date.now() >= tokenExpires) {
                setErrorMessage('Token Expired');
            }

            const res = await fetch(`${baseURL}/member/1`, {
                method: 'POST',
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
        isLoading ? (
            <div className={styles.loaderWrapper} >
                <Loader className={styles.loader} />
            </div>
        ) : (
            <>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values, actions) => submitHandler(values, actions)}>
                    <Form className={styles.form}>
                        <FormikInput className={styles.input} type='text' name='name' id='name' label='User Name' />

                        <FormikInput className={styles.input} type='text' name='department' id='department' label='Department' />

                        <FormikInput className={styles.input} type='text' name='position' id='position' label='Position' />

                        <FormikInput className={styles.input} type='file' name='image' id='image' label='Image' accept='image/jpeg,image/jpg' />

                        <Button className={styles.button} text='Add a team member' type='submit' />
                    </Form>
                </Formik>

                {isError && <ErrorMessage err={errorMessage} />}
            </>
        )
    )
}
