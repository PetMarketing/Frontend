import { getServerSession } from 'next-auth';

import Accordion from '../components/Accordion/Accordion';

import { getMembers } from '@/services/fetchData';

import { authConfig } from '@/config/auth';

import NewTeamMemberForm from '../components/NewTeamMemberForm/NewTeamMemberForm';

import styles from './page.module.scss'

export default async function TeamPage() {
	const session = await getServerSession(authConfig);
	const members = await getMembers();

	return (
		<div className={styles.page}>
			<h3 className={styles.title}>Team</h3>

			<h3 className={styles.title}>New team member</h3>

			<div className={styles.addNewMember}>
				<NewTeamMemberForm session={session} />
			</div>

			<Accordion
				columns={['id', 'name', 'department']}
				blockListItems={members}
				blockData={members}
			/>
		</div>
	)
}
