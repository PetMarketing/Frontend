import React from 'react'

import { IAccordionBlockListProps } from '@/types/IAccordionProps'

import FormEditingBlock from './FormEditingBlock'

import styles from '../Accordion.module.scss'

const AccordionBlockList: React.FC<IAccordionBlockListProps> = ({
	columns,
	blockListItems,
	toggleAccordion,
	deleteItem,
	currentBlock,
	blockData,
}) => {
	return (
		<div>
			{blockListItems.map((row, rowIndex) => (
				<div key={rowIndex}>
					<div
						className={styles.gridRow}
						style={{ gridTemplateColumns: `repeat(${columns.length + 2}, 1fr)` }}
					>
						{columns.map((col, colIndex) => (
							<div key={colIndex} className={styles.gridRowItem}>
								<p>{row[col]}</p>
							</div>
						))}

						<div className={styles.gridRowItem}>
							<button onClick={() => toggleAccordion(row.ID)}>Редагувати</button>
						</div>
						<div className={styles.gridRowItem}>
							<button onClick={() => deleteItem(row.ID)}>Видалити</button>
						</div>
					</div>

					{currentBlock === row.ID && (
						<div className={styles.editContainer}>
							{blockData.map(({ id, title, description, image }) =>
								id === currentBlock ? (
									<div key={id} className={styles.editContent}>
										<FormEditingBlock
											id={id}
											title={title}
											description={description}
											image={image}
										/>
									</div>
								) : null,
							)}
						</div>
					)}
				</div>
			))}
		</div>
	)
}

export default AccordionBlockList
