import Image from 'next/image'

import { IMember } from '@/types/IMember'

import { getClsNames } from '@/utils/helpers'

import { dela } from '@/styles/fonts/fonts'

import styles from './MemberCard.module.scss'

interface Props {
	member: IMember
}

const MemberCard: React.FC<Props> = ({ member }) => {
	return (
		<div className={styles.card}>
			<div className={styles.imageWrapper}>
				<Image src={member.image.imagePath} width={119} height={122} alt={member.image.description} />
			</div>
			<div className={getClsNames(styles.position, [dela.className])}>{member.position}</div>
			<p className={styles.name}>{member.name}</p>
		</div>
	)
}

export default MemberCard
