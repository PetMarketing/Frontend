'use client'

import { IAboutUs, ICreateAboutUsBlock } from '@/types/IAboutUs'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { ValidationError } from 'yup'

import styles from './AboutUs.module.scss'
import btnStyles from '@/components/Button/Button.module.scss'

const MaxSise = 5242880

const FormCreateBlock = () => {
	const validationSchema = Yup.object({
		title: Yup.string()
			.min(2, 'Title must be at least 2 characters')
			.max(60, 'Title must be at most 64 characters')
			.required('Title is required'),
		textBlock: Yup.string()
			.min(2, 'Block text must be at least 2 characters')
			.max(60, 'Block text must be at most 120 characters')
			.required('Block text is required'),
		photo: Yup.mixed()
			.required('Photo is required')
			.test('fileSize', 'The photo size must not be greater than 5 Mb', value => {
				return value && (value as File).size <= MaxSise
			})
			.test('fileType', 'The photo format must be jpeg/jpg type', value => {
				return value && ['image/jpeg', 'image/jpg'].includes((value as File).type)
			})
			.test('fileDimensions', 'Minimum size of photo 70x70px', async value => {
				if (!value) throw new ValidationError('Value is required')
				return new Promise<boolean>((resolve, reject) => {
					const img = new Image()
					img.src = URL.createObjectURL(value as File)
					img.onload = () => {
						URL.revokeObjectURL(img.src)
						if (img.width >= 70 && img.height >= 70) {
							resolve(true)
						} else {
							reject(
								new ValidationError('Photo dimensions must be at least 70x70px'),
							)
						}
					}
					img.onerror = () => {
						reject(new ValidationError('Failed to load image'))
					}
				})
			}),
		imageDescription: Yup.string()
			.min(2, 'Image description must be at least 2 characters')
			.max(60, 'Image description must be at most 120 characters')
			.required('Image description is required'),
	})

	const formik = useFormik<ICreateAboutUsBlock>({
		initialValues: {
			title: '',
			textBlock: '',
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
			<div className={styles.inputWrapper}>
				<p className={styles.labelText}>Title</p>

				<input
					type='title'
					name='title'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.title}
					className={styles.titleInput}
					placeholder='We are professionals'
					style={{
						color: formik.touched.title && formik.errors.title ? 'red' : '#202224',
					}}
				/>

				{formik.errors.title ? (
					<span className={styles.errorText}>{formik.errors.title}</span>
				) : null}
			</div>

			<div className={styles.inputWrapper}>
				<p className={styles.labelText}>Block text</p>

				<input
					type='textBlock'
					name='textBlock'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.textBlock}
					className={styles.titleInput}
					placeholder='Everyone on the team has experience working with different niches and types of businesses.'
					style={{
						color:
							formik.touched.textBlock && formik.errors.textBlock
								? 'red'
								: '#202224',
					}}
				/>

				{formik.errors.textBlock ? (
					<span className={styles.errorText}>{formik.errors.textBlock}</span>
				) : null}
			</div>

			<div className={styles.inputWrapper}>
				<p className={styles.labelText}>Adding images and videos</p>

				<label htmlFor='photo' className={styles.photoLabel}>
					<input
						className={styles.hiddenInput}
						id='photo'
						name='photo'
						type='file'
						onChange={event => {
							if (event.currentTarget.files) {
								formik.setFieldValue('photo', event.currentTarget.files[0])
							}
						}}
						accept='image/jpeg,image/jpg'
					/>
					<p
						className={styles.addBtn}
						style={{
							border: formik.errors.photo ? '2px solid red' : '3px solid yellow',
						}}
					>
						+ Add
					</p>
				</label>
				{formik.errors.photo ? (
					<span className={styles.errorText}>{formik.errors.photo}</span>
				) : null}
			</div>

			<div className={styles.inputWrapper}>
				<p className={styles.labelText}>Image description</p>

				<input
					type='imageDescription'
					name='imageDescription'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.imageDescription}
					className={styles.titleInput}
					placeholder='Description'
					style={{
						color:
							formik.touched.imageDescription && formik.errors.imageDescription
								? 'red'
								: '#202224',
					}}
				/>
				{formik.touched.imageDescription && formik.errors.imageDescription ? (
					<span className={styles.errorText}>
						{formik.touched.imageDescription && formik.errors.imageDescription}
					</span>
				) : null}
			</div>

			<button type='submit' className={`${btnStyles.primaryBtn} ${styles.submitBtn}`}>
				Add a new block
			</button>
		</form>
	)
}

export default FormCreateBlock
