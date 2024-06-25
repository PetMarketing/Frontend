import { useRef } from 'react';
import { useField } from 'formik';

import Button from '../Button/Button';

import styles from './FormikInput.module.scss';

interface IFormikInputProps {
    id: string;
    type: string;
    name: string;
    placeholder?: string;
    label: string;
    className?: string;
    accept?: string;
}

export default function FormikInput(props: IFormikInputProps) {
    const [field, meta] = useField(props);
    const isFileInput = props.type === 'file';
    const inputRef = useRef<HTMLInputElement>(null);
    const inputClassName = `${styles.input} ${meta.touched && meta.error ? styles.inputError : meta.touched ? styles.inputSuccess : ''}`;

    // Обробник кліку на кнопку "+ Add"
    const handleAddButtonClick = () => {
        if (isFileInput && inputRef.current) {
            inputRef.current.click(); // Імітуємо клік по інпуту типу файл
        }
    };

    return (
        <div className={`${styles.inputWrapper} ${props.className}`}>
            <label htmlFor={props.id} className={styles.label}>{props.label}</label>
            {isFileInput ? (
                <>
                    <input {...field} {...props} className={`${inputClassName} ${styles.fileInput}`} ref={inputRef} />
                    <Button className={styles.button} text='+ Add' variant='black' onClick={handleAddButtonClick} />
                </>
            ) : (
                <input {...field} {...props} className={inputClassName} />
            )}

            {meta.touched && meta.error ? (
                <span className={`${styles.error}`}>{meta.error}</span>
            ) : null}
        </div>
    );
}
