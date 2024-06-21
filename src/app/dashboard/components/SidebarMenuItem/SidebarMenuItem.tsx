import Link from 'next/link'

import styles from './SidebarMenuItem.module.scss'

interface ISidebarMenuItemProps {
	href: string
	Icon: React.ComponentType
	name: string
}

export default function SidebarMenuItem({ href, Icon, name }: ISidebarMenuItemProps) {
	return (
		<Link href={href} className={styles.link}>
			<div className={styles.icon}>
				<Icon />
			</div>
			{name}
		</Link>
	)
}
