import { redirect } from 'next/navigation';

import LoginForm from '../components/LoginForm/LoginForm';

import { getSession } from '@/services/auth/auth.service';

import styles from './page.module.scss'

export default async function Login() {
	const session = await getSession();

	if (session.user.isOnline) {
		redirect('/dashboard');
	}

	return (
		<div className={styles.login}>
			<LoginForm />
		</div >
	)
}

