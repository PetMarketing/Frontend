import React from 'react'
import { useFormik } from 'formik'

import { IAboutUs, ICreateAboutUsBlock } from '@/types/IAboutUs'

import GenericInputContainer from '../../GenericInputContainer/GenericInputContainer'
import ImageInput from '../../GenericInputContainer/ImageInputEdit'
import { validationSchema } from '@/utils/yupFormCreateBlock'

import styles from '../Accordion.module.scss'
import stylesGeneric from '../../GenericInputContainer/GenericInputContainer.module.scss'

const FormEditingBlock: React.FC<IAboutUs> = ({ title, description }) => {
	// const formik = useFormik<ICreateAboutUsBlock>({
	// 	initialValues: {
	// 		titleBlock: title,
	// 		descriptionBlock: description,
	// 		photo: image.imagePath,
	// 		imageDescription: image.description,
	// 	},
	// 	validationSchema,
	// 	onSubmit: async values => {
	// 		try {
	// 			console.log(values)
	// 		} catch (error) {
	// 			console.log('error:', error)
	// 		} finally {
	// 			formik.resetForm()
	// 		}
	// 	},
	// })

	return (
		// <>
		// 	<div className={styles.btnsEditingBlock}>
		// 		<button className={stylesGeneric.btnEditingBlock}>Видалити блок</button>
		// 		<button className={stylesGeneric.btnEditingBlock}>Приховати блок</button>
		// 	</div>

		// 	<form className={styles.formContainer} onSubmit={formik.handleSubmit}>
		// 		<GenericInputContainer
		// 			formik={formik}
		// 			labelText='Title'
		// 			name='titleBlock'
		// 			placeholder={title}
		// 			value={formik.values.titleBlock}
		// 			touched={formik.touched.titleBlock}
		// 			error={formik.errors.titleBlock}
		// 		/>
		// 		<GenericInputContainer
		// 			formik={formik}
		// 			labelText='Block text'
		// 			name='descriptionBlock'
		// 			placeholder={description}
		// 			value={formik.values.descriptionBlock}
		// 			touched={formik.touched.descriptionBlock}
		// 			error={formik.errors.descriptionBlock}
		// 		/>

		// 		<p className={stylesGeneric.labelText}>Adding images and videos</p>
		// 		<div className={styles.editingPhotoLabelWrapper}>
		// 			<ImageInput
		// 				formik={formik}
		// 				value={formik.values.photo}
		// 				placeholder={formik.values.imageDescription}
		// 				labelText=''
		// 				name='photo'
		// 				error={formik.errors.photo}
		// 			/>
		// 			<div className={styles.editingInputWrapper}>
		// 				<GenericInputContainer
		// 					formik={formik}
		// 					labelText=''
		// 					name='imageDescription'
		// 					placeholder='Description'
		// 					value={formik.values.imageDescription}
		// 					touched={formik.touched.imageDescription}
		// 					error={formik.errors.imageDescription}
		// 				/>
		// 			</div>
		// 			<button className={stylesGeneric.addBtn}>Видалити</button>
		// 			<button className={stylesGeneric.addBtn}>Замінити</button>
		// 		</div>
		// 	</form>
		// </>
		<div>TEST</div>
	)
}

export default FormEditingBlock
