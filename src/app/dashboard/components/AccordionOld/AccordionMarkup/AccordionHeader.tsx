import React from 'react'

import { IAccordionHeaderProps } from '@/types/IAccordionProps'

import styles from '../Accordion.module.scss'

const AccordionHeader: React.FC<IAccordionHeaderProps> = ({ columns }) => {
	return (
		<div
			className={styles.gridHeader}
			style={{ gridTemplateColumns: `repeat(${columns.length + 2}, 1fr)` }}
		>
			{columns.map((col, index) => (
				<div key={index} className={styles.gridHeaderItem}>
					<p>{col}</p>
				</div>
			))}
			<div className={styles.gridHeaderItemHidden}>
				<p>Редагувати</p>
			</div>
			<div className={styles.gridHeaderItemHidden}>
				<p>Видалити</p>
			</div>
		</div>
	)
}

export default AccordionHeader
