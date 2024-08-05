'use client'

import styles from './page.module.scss'

export default function Dashboard() {
	const handleRefreshToken = async () => {
		const baseURL = process.env.NEXT_PUBLIC_API_KEY;

		const res = await fetch(`${baseURL}/admin/refresh-token`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
		});

		const data = await res.json();

		console.log('data: ', data);
	};

	return (
		<div>
			<h3>Dashboard</h3>

			<div className={styles.test}>
				<button onClick={handleRefreshToken}>Refresh Token</button>
			</div>
		</div>
	)
}
