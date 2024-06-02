import Link from 'next/link';
import { signOut } from 'next-auth/react';

import Logo from '@/components/Logo/Logo';
import SidebarMenuItem from '../SidebarMenuItem/SidebarMenuItem';

import DashboardIcon from '@/assets/svg/dashboard-icon';
import InfoIcon from '@/assets/svg/info-icon';
import EventIcon from '@/assets/svg/event-icon';
import LogoutIcon from '@/assets/svg/logout-icon';

import styles from './Sidebar.module.scss';

const menuItems = [
    { href: '#!', Icon: DashboardIcon, name: "Dashboard" },
    { href: '#!', Icon: InfoIcon, name: "About Us" },
    { href: '#!', Icon: DashboardIcon, name: "Services" },
    { href: '#!', Icon: EventIcon, name: "Events" },
    { href: '#!', Icon: DashboardIcon, name: "Client requests" }
]

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <Logo size='small' />
            </div>

            <nav className={styles.menu}>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <SidebarMenuItem href={item.href} Icon={item.Icon} name={item.name} />
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}
