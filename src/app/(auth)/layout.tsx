import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'

import { getClsNames } from '@/utils/helpers'

import { nunitoSans } from '@/styles/fonts/fonts'

import styles from './layout.module.scss'

import '@/styles/reset.scss'
import '@/styles/variables.scss'
import '@/styles/globals.scss'

export const metadata: Metadata = {
	title: 'Login',
	description: 'Generated by create next app',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={getClsNames(styles.layout, [nunitoSans.className])}>
				{children}
			</body>
		</html>
	)
}
