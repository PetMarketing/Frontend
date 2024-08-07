import type { Metadata } from 'next'

import { montserrat } from '@/styles/fonts/fonts'

export const metadata: Metadata = {
	title: 'City Agency',
	description: 'Generated by create next app',
}

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className={montserrat.className}>
			{children}
		</main>
	)
}
