import LoginForm from '../components/LoginForm/LoginForm';

import styles from './page.module.scss'

export default function Login() {
	return (
		<div className={styles.login}>
			<LoginForm />
		</div >
	)
}

