'use client'

import React, { ReactNode, useState } from 'react';
import Image from 'next/image';

import Button from '../Button/Button';

import deleteIcon from '@/assets/images/cencel-delete.svg'

import styles from './styles.module.scss';

interface IProps {
    columns: string[];
    data: { [key: string]: any }[];
    form: ReactNode;
}

export default function Accordion({ columns, data, form }: IProps) {
    const [currentItem, setCurrentItem] = useState('');

    const toggleCurrentItem = (id: string) => {
        setCurrentItem(currentItem === id ? '' : id)
    }

    return (
        <div className={styles.accordion}>
            <table>
                <thead>
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index}>{col}</th>
                        ))}
                        <th className={styles.headerItemHidden}>Edit</th>
                        <th className={styles.headerItemHidden}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <React.Fragment key={rowIndex}>
                            <tr key={rowIndex} className={currentItem === row.id ? styles.active : ''}>
                                {columns.map((col, colIndex) => (
                                    <td key={colIndex}>{row[col]}</td>
                                ))}
                                <td>
                                    <Button variant='edit' text='Edit' onClick={() => toggleCurrentItem(row.id)} />
                                </td>
                                <td>
                                    <button>
                                        <Image src={deleteIcon} alt='delete' width={24} />
                                    </button>
                                </td>
                            </tr>
                            {currentItem === row.id && (
                                <tr>
                                    <td colSpan={columns.length + 2}>{form}</td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
