import { getSession } from '@/services/auth/auth.service';

import UserSettingsForm from '../components/user-settings-form';

import styles from './page.module.scss'

export default async function SettingsPage() {
	const session = await getSession();

	return (
		<div className={styles.page}>
			<h3 className={styles.title}>Settings</h3>

			<div className={styles.editorBlock}>
				<UserSettingsForm user={session.user} />
			</div>
		</div>
	)
}
