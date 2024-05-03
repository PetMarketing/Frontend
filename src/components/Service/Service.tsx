import React from 'react'
import Link from 'next/link'

import Button from '@/components/Button/Button'

import { IService } from '@/types/IService'

import styles from './Service.module.scss'

type Props = {
	categoryName: string
	services: IService[]
}

const Service: React.FC<Props> = ({ categoryName, services }) => {
	return (
		<div className={styles.service}>
			<h5>{categoryName.toUpperCase()}</h5>
			<ul>
				{services.map((service, index) => (
					<li key={index}>{service.title}</li>
				))}
			</ul>
			<Button variant='primary' className={styles.button}>
				<Link href='#'>Беру</Link>
			</Button>
		</div>
	)
}

export default Service
