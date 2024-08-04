import Link from 'next/link'

import { useSidebar } from '@/store/sidebar.store'

import styles from './styles.module.scss'

interface ISidebarMenuItemProps {
	href: string
	Icon: React.ComponentType
	name: string
	active?: boolean
}

export default function SidebarMenuItem({ href, Icon, name, active }: ISidebarMenuItemProps) {
	const toggleSidebar = useSidebar((state) => state.toggleSidebar)

	return (
		<Link href={href} className={`${styles.link} ${active ? styles.active : ''}`} onClick={toggleSidebar}>
			<div className={styles.icon}>
				<Icon />
			</div>
			{name}
		</Link>
	)
}
