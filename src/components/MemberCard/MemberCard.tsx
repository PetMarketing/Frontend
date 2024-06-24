import Link from 'next/link'
import Image from 'next/image'

import LinkedInIcon from '@/assets/svg/linkedIn-icon'
import GitHubIcon from '@/assets/svg/github-icon'
import DribbleIcon from '@/assets/svg/dribbble-icon'
import BehanceIcon from '@/assets/svg/behance-icon'
import InstagramAltIcon from '@/assets/svg/instagram-alt-icon'

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

			{member.social && (
				<div className={styles.socials}>
					{member.social.linkedIn && (
						<Link className={styles.link} href={member.social.linkedIn} target='_blank'>
							<LinkedInIcon />
						</Link>
					)}
					{member.social.gitHub && (
						<Link className={styles.link} href={member.social.gitHub} target='_blank'>
							<GitHubIcon />
						</Link>
					)}
					{member.social.behance && (
						<Link className={styles.link} href={member.social.behance} target='_blank'>
							<BehanceIcon />
						</Link>
					)}
					{member.social.dribble && (
						<Link className={styles.link} href={member.social.dribble} target='_blank'>
							<DribbleIcon />
						</Link>
					)}
					{member.social.instagram && (
						<Link className={styles.link} href={member.social.instagram} target='_blank'>
							<InstagramAltIcon />
						</Link>
					)}
				</div>
			)}
		</div>
	)
}

export default MemberCard
