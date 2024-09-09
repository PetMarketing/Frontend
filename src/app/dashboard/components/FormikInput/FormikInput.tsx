import { useRef, useState } from 'react'
import Image from 'next/image'
import { useField, useFormikContext } from 'formik';

import Button from '../Button/Button';

import styles from './FormikInput.module.scss';

interface IProps {
    id: string;
    type: string;
    name: string;
    placeholder?: string;
    label: string;
    className?: string;
    accept?: string;
}

export default function FormikInput(props: IProps) {
    const [field, meta, helpers] = useField(props);
    const isFileInput = props.type === 'file';
    const inputRef = useRef<HTMLInputElement>(null);
    const inputClassName = `${styles.input} ${meta.touched && meta.error ? styles.inputError : meta.touched ? styles.inputSuccess : ''}`;
    const [image, setImage] = useState<string | null>(null);

    // Обробник кліку на кнопку "+ Add"
    const handleAddButtonClick = () => {
        if (isFileInput && inputRef.current) {
            inputRef.current.click(); // Імітуємо клік по інпуту типу файл
        }
    };

    // Обробник зміни інпуту (завантаження файлу)
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.currentTarget.files?.[0];

        if (file) {
            // Створюємо URL для попереднього перегляду файлу
            const fileUrl = URL.createObjectURL(file);
            setImage(fileUrl);
            helpers.setValue(file);  // Передаємо файл у Formik
        }
    };

    // Обробник для кнопки "Remove"
    const handleRemoveClick = () => {
        setImage(null);  // Видаляємо попередній перегляд
        helpers.setValue(null);  // Скидаємо значення поля
        if (inputRef.current) {
            inputRef.current.value = '';  // Очищаємо інпут
        }
    };

    return (
        <div className={`${styles.inputWrapper} ${props.className}`}>
            <label htmlFor={props.id} className={styles.label}>{props.label}</label>
            {isFileInput ? (
                <>
                    {image && (
                       <div className={styles.imageWrapper}>
                           <Image src={image} width={400} height={400} alt='Preview' className={styles.image} />
                       </div>
                    )}

                    <input {...field} {...props} className={`${inputClassName} ${styles.fileInput}`} ref={inputRef} onChange={handleFileChange} />
                    {!image ? (
                       <Button className={styles.button} text='+ Add' variant='black' onClick={handleAddButtonClick} />
                    ) : (
                       <div className={styles.buttons}>
                           <Button className={styles.button} text='Replace' variant='black' onClick={handleAddButtonClick} />
                           <Button className={styles.button} text='Remove' variant='black' onClick={handleRemoveClick} />
                       </div>
                   )}
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
