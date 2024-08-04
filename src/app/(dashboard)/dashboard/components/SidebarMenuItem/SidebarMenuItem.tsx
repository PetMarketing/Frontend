import Link from 'next/link'

import styles from './SidebarMenuItem.module.scss'

interface ISidebarMenuItemProps {
	href: string
	Icon: React.ComponentType
	name: string
	active?: boolean
}

export default function SidebarMenuItem({ href, Icon, name, active }: ISidebarMenuItemProps) {
	return (
		<Link href={href} className={`${styles.link} ${active ? styles.active : ''}`}>
			<div className={styles.icon}>
				<Icon />
			</div>
			{name}
		</Link>
	)
}
