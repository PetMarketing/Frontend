import React, { useEffect } from 'react'
import Image from 'next/image'
import styles from './Sample.module.scss'
import { ISample } from '@/app/types/ISample'

type SampleProps = {
	sample: ISample
}

const Sample: React.FC<SampleProps> = ({ sample }) => {
	return (
		<div className={styles.sample}>
			<div className={styles.img}>
				<Image
					src={sample.imagePath}
					alt={sample.imageAlt}
					width={634}
					height={354}
				/>
			</div>
			<div className={styles.info}>
				<h6>{sample.title}</h6>
				<h3>{sample.collaborate}</h3>
				<p className={styles.bold}>Клієнт:</p>
				<p className={styles.bold}>{sample.client}</p>
				<p className={styles.bold}>Виклик:</p>
				<p>{sample.challenge}</p>
			</div>
		</div>
	)
}

export default Sample
