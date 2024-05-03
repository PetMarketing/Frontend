'use client'

import React, { useEffect } from 'react'

import MemberCard from '@/components/MemberCard/MemberCard'
import { Section } from '@/components/Section/Section'

import { useMembersStore } from '@/store/store'

import styles from './MembersBlock.module.scss'

const MembersBlock = () => {
	const { members, fetchMembers } = useMembersStore(state => state);

	useEffect(() => {
		fetchMembers();
	}, [])

	return (
		<Section>
			<div className={styles.team}>
				{members.map(member => (
					<MemberCard member={member} key={member.id} />
				))}
			</div>
		</Section>
	)
}

export default MembersBlock
