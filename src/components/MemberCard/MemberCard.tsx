import React from 'react'
import Image from 'next/image'

import { IMember } from '@/types/IMember'

import styles from './MemberCard.module.scss'

interface Props {
	member: IMember
}

const MemberCard: React.FC<Props> = ({ member }) => {
	return (
		<div className={styles.card}>
			<Image
				src={member.image.imagePath}
				alt={member.image.description}
				width={119}
				height={122} />
			<div>
				<span>
					{member.internalPosition}
					<span>{member.officialPosition}</span>
				</span>
				<p>{member.name}</p>
			</div>
		</div>
	)
}

export default MemberCard
