import { useField } from 'formik';

import styles from './FormikInput.module.scss';

interface IFormikInputProps {
    id: string;
    type: string;
    name: string;
    placeholder?: string;
    label: string;
    className?: string;
}

export default function FormikInput(props: IFormikInputProps) {
    const [field, meta] = useField(props);
    const inputClassName = `${styles.input} ${meta.touched && meta.error ? styles.inputError : meta.touched ? styles.inputSuccess : ''}`;

    return (
        <div className={`${styles.inputWrapper} ${props.className}`}>
            <label htmlFor={props.id} className={styles.label}>{props.label}</label>
            <input {...field} {...props} className={inputClassName} />
            {meta.touched && meta.error ? (
                <span className={`${styles.error}`}>{meta.error}</span>
            ) : null}
        </div>
    );
}
