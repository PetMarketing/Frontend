'use client'

import { ICreateAboutUsBlock } from '@/types/IAboutUs'
import { useFormik } from 'formik'

import btnStyles from '@/components/Button/Button.module.scss'
import { validationSchema } from '@/utils/yupFormCreateBlock'
import GenericInputContainer from '../GenericInputContainer/GenericInputContainer'
import ImageInput from '../GenericInputContainer/ImageInputCreate'

import styles from '../AboutUs.module.scss'

const FormCreateBlock = () => {
	const formik = useFormik<ICreateAboutUsBlock>({
		initialValues: {
			titleBlock: '',
			descriptionBlock: '',
			photo: '',
			imageDescription: '',
		},
		validationSchema,
		onSubmit: async values => {
			try {
				console.log(values)
			} catch (error) {
				console.log('error:', error)
			} finally {
				formik.resetForm()
			}
		},
	})

	return (
		<form className={styles.formContainer} onSubmit={formik.handleSubmit}>
			<GenericInputContainer
				formik={formik}
				labelText='Title'
				name='titleBlock'
				placeholder='We are professionals'
				value={formik.values.titleBlock}
				touched={formik.touched.titleBlock}
				error={formik.errors.titleBlock}
			/>

			<GenericInputContainer
				formik={formik}
				labelText='Block text'
				name='descriptionBlock'
				placeholder='Everyone on the team has experience working with different niches and types of businesses.'
				value={formik.values.descriptionBlock}
				touched={formik.touched.descriptionBlock}
				error={formik.errors.descriptionBlock}
			/>

			<ImageInput
				formik={formik}
				labelText='Adding images and videos'
				name='photo'
				error={formik.errors.photo}
			/>

			<GenericInputContainer
				formik={formik}
				labelText='Image description'
				name='imageDescription'
				placeholder='Description'
				value={formik.values.imageDescription}
				touched={formik.touched.imageDescription}
				error={formik.errors.imageDescription}
			/>

			<button type='submit' className={`${btnStyles.primaryBtn} ${styles.submitBtn}`}>
				Add a new block
			</button>
		</form>
	)
}

export default FormCreateBlock
