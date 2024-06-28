import MemberCard from '@/components/MemberCard/MemberCard'
import { Section } from '@/components/Section/Section'
import NoResultsFound from '../NoResultsFound/NoResultsFound'

import { getMembers } from '@/services/fetchData'

import { getClsNames } from '@/utils/helpers'

import { IMember } from '@/types/IMember'

import { dela } from '@/styles/fonts/fonts'

import styles from './MembersBlock.module.scss'

const MembersBlock = async () => {
	const members = await getMembers()

	if (!members.length) {
		return (
			<Section title='Team'>
				<NoResultsFound />
			</Section>
		)
	}

	interface IMemberGroupedByPosition {
		[department: string]: IMember[]
	}

	const groupByPosition = (members: IMember[]): IMemberGroupedByPosition => {
		return members.reduce((acc, member) => {
			const { department } = member
			if (!acc[department]) {
				acc[department] = []
			}
			acc[department].push(member)
			return acc
		}, {} as IMemberGroupedByPosition)
	}

	const groupedTeam = groupByPosition(members)

	return (
		<Section>
			<div className={styles.team}>
				{Object.entries(groupedTeam).map(([position, members]) => (
					<div className={styles.position} key={position}>
						<h2 className={getClsNames(styles.title, [dela.className])}>
							{position.replace(/-/g, ' ')}
						</h2>
						<div className={styles.members}>
							{members.map(member => (
								<div className={styles.member} key={member.id}>
									<MemberCard member={member} />
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</Section>
	)
}

export default MembersBlock
