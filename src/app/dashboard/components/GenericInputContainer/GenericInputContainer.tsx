import { IGenericInputContainerProps } from '@/types/IGenericInputContainerProps'

import styles from './GenericInputContainer.module.scss'

const GenericInputContainer = ({
	formik,
	labelText,
	name,
	placeholder,
	value,
	touched,
	error,
}: IGenericInputContainerProps) => {
	return (
		<div className={styles.inputWrapper}>
			{labelText !== '' && <p className={styles.labelText}>{labelText}</p>}

			<input
				type='text'
				name={name}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={value}
				className={styles.titleInput}
				placeholder={placeholder}
				style={{
					color: touched && error ? 'red' : '#202224',
				}}
			/>

			{error ? <p className={styles.errorText}>{error}</p> : null}
		</div>
	)
}

export default GenericInputContainer
