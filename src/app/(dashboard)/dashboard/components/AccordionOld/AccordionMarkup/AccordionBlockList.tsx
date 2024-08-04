import React from 'react'

import { IAccordionBlockListProps } from '@/types/IAccordionProps'

import FormEditingBlock from './FormEditingBlock'

import styles from '../Accordion.module.scss'
import Image from 'next/image'

import deleteIcon from '@/assets/images/cencel-delete.svg'

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
				<div key={rowIndex} className={styles.gridRowContainer}>
					<div
						className={styles.gridRow}
						style={{
							backgroundColor:
								currentBlock === row.id
									? 'rgba(216, 255, 105, 0.52)'
									: 'transparent',
							gridTemplateColumns: `repeat(${columns.length + 2}, 1fr)`,
						}}
					>
						{columns.map((col, colIndex) => (
							<div key={colIndex} className={styles.gridRowItem}>
								<p>{row[col]}</p>
							</div>
						))}

						<div className={styles.gridRowItem}>
							<button
								className={styles.editBtn}
								onClick={() => toggleAccordion(row.id)}
							>
								Edit
							</button>
						</div>
						<div className={styles.gridRowItem}>
							<button onClick={() => deleteItem(row.id)}>
								<Image src={deleteIcon} alt='delete' width={24} />
							</button>
						</div>
					</div>

					{currentBlock === row.id && (
						<div className={styles.editContainer}>
							{blockData.map(({ id, title, description, image }) =>
								id === currentBlock ? (
									<div key={id} className={styles.editContent}>
										{/* <FormEditingBlock
											id={id}
											title={title}
											description={description}
											image={image}
										/> */}
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
