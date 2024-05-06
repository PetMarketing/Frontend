import Link from 'next/link';

import LoginForm from '../components/LoginForm/LoginForm';

import styles from './page.module.scss'



export default function Login() {
	return (
		<div className={styles.login}>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>Login to Account</h1>
				<p className={styles.subtitle}>Please enter your email and password to continue</p>

				<LoginForm />

				<Link href={'/'} className={styles.homeLink}>Go to Home</Link>
			</div >
		</div >
	)
}

