import { IGenericInputContainerProps } from '@/types/IGenericInputContainerProps'

import styles from './GenericInputContainer.module.scss'

const ImageInput = ({ formik, labelText, name, error }: IGenericInputContainerProps) => {
	return (
		<div className={styles.inputWrapper}>
			<p className={styles.labelText}>{labelText}</p>

			<label htmlFor='photo' className={styles.photoLabel}>
				<input
					className={styles.hiddenInput}
					id='photo'
					name={name}
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
						border: error ? '2px solid red' : '3px solid yellow',
					}}
				>
					+ Add
				</p>
			</label>
			{
				error ? <p className={styles.errorText}>{error}</p> : null
				// <p className={styles.successText}>Photo added successfully</p>
			}
		</div>
	)
}

export default ImageInput
