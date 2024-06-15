import React from 'react'
import Link from 'next/link'

import { IService } from '@/types/IService'

import styles from './Service.module.scss'
import btnStyles from '../Button/Button.module.scss'

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
			<Link className={`${btnStyles.primaryBtn} ${styles.linkBtn}`} href='/brief'>
				Order
			</Link>
		</div>
	)
}

export default Service
