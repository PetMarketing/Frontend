'use client'

import React, { useState } from 'react'
import AccordionHeader from './AccordionMarkup/AccordionHeader'
import { IAccordionProps } from '@/types/IAccordionProps'

import styles from './Accordion.module.scss'
import AccordionBlockList from './AccordionMarkup/AccordionBlockList'

const Accordion: React.FC<IAccordionProps> = ({ columns, blockListItems, blockData }) => {
	const [currentBlock, setCurrentBlock] = useState('')

	const toggleAccordion = (id: string) => {
		setCurrentBlock(currentBlock === id ? '' : id)
	}

	const deleteItem = (itemId: string) => {
		console.log(`Delete item with ID: ${itemId}`)
	}

	return (
		<div className={styles.accordion}>
			<div className={styles.accordionContent}>
				<AccordionHeader columns={columns} />
				<AccordionBlockList
					columns={columns}
					blockListItems={blockListItems}
					toggleAccordion={toggleAccordion}
					deleteItem={deleteItem}
					currentBlock={currentBlock}
					blockData={blockData}
				/>
			</div>
		</div>
	)
}

export default Accordion
