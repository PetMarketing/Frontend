import Image from 'next/image'

import { IGenericInputContainerProps } from '@/types/IGenericInputContainerProps'

import styles from './GenericInputContainer.module.scss'

const ImageInput = ({
	formik,
	labelText,
	name,
	placeholder,
	value,
	error,
}: IGenericInputContainerProps) => {
	return (
		<div className={styles.inputWrapper}>
			{labelText !== '' && <p className={styles.labelText}>{labelText}</p>}

			<label htmlFor='photo' className={styles.photoLabel}>
				<Image
					src={value || ''}
					alt={placeholder || ''}
					width={50}
					height={50}
					className={styles.editImage}
				/>
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
			</label>
			{error ? <p className={styles.errorText}>{error}</p> : null}
		</div>
	)
}

export default ImageInput
