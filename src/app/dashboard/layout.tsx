import type { Metadata } from 'next'

import Providers from './components/Providers/Providers'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'

import { nunitoSans } from '@/styles/fonts/fonts'

import styles from './page.module.scss'

import '@/styles/reset.scss'
import '@/styles/variables.scss'
import '@/styles/globals.scss'

export const metadata: Metadata = {
	title: 'Dashboard',
	description: 'Generated by create next app',
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={nunitoSans.className}>
				<Providers>
					<div className={styles.wrapper}>
						<Sidebar />
						<div className={styles.content}>
							<Header />
							{children}
						</div>
					</div>
				</Providers>
			</body>
		</html>
	)
}
