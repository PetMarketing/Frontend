import type { Metadata } from 'next'
import { Montserrat, Dela_Gothic_One } from 'next/font/google'

import '@/styles/reset.scss'
import '@/styles/variables.scss'
import '@/styles/globals.scss'

const montserrat = Montserrat({
	weight: ['400', '500', '600', '800'],
	subsets: ['latin'],
})

const dela = Dela_Gothic_One({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Login',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={montserrat.className}>{children}</body>
		</html>
	)
}
