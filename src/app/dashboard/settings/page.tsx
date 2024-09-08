import { getSession } from '@/services/auth/auth.service';

import UserSettingsForm from '../components/user-settings-form';

import styles from './page.module.scss'
import UserAvatarForm from '@/app/dashboard/components/user-avatar-form'

export default async function SettingsPage() {
	const session = await getSession();

	return (
		<div className={styles.page}>
			<h3 className={styles.title}>Settings</h3>

			<div className={styles.editorBlock}>
				<UserAvatarForm user={session.user} />
				<UserSettingsForm user={session.user} />
			</div>
		</div>
	)
}
