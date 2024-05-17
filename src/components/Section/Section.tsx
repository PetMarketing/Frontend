import { Container } from '../Container/Container'
import Logo from '../Logo/Logo'

import { getClsNames } from '@/utils/helpers'

import { dela } from '@/styles/fonts/fonts'

import styles from './Section.module.scss'

type SectionProps = {
	title?: string
	children: React.ReactNode
	className?: string
	useH1?: boolean
}

export const Section: React.FC<SectionProps> = ({
	title,
	children,
	className,
	useH1 = false,
}) => {
	const Tag = useH1 ? 'h1' : 'h2'
	return (
		<section className={getClsNames(styles.section, [className])}>
			<Container>
				{Tag === 'h1' && <Logo size='large' />}
				{title && <Tag className={dela.className}>{title}</Tag>}
				{children}
			</Container>
		</section>
	)
}
