import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'

import Providers from './components/Providers/Providers'

import '@/styles/reset.scss'
import '@/styles/variables.scss'
import '@/styles/globals.scss'

const nunitoSans = Nunito_Sans({
	weight: ['400', '500', '600', '700', '800'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Login',
	description: 'Generated by create next app',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={nunitoSans.className}>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	)
}
