'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import SidebarMenuItem from '../sidebar-menu-item';
import SidebarLogout from '../sidebar-logout';

import DashboardIcon from '@/assets/svg/dashboard-icon';
import ServiceIcon from '@/assets/svg/service-icon';
import InfoIcon from '@/assets/svg/info-icon';
import EventIcon from '@/assets/svg/event-icon';
import SettingsIcon from '@/assets/svg/settings-icon';
import RequestsIcon from '@/assets/svg/requests-icon';
import TeamIcon from '@/assets/svg/team-icon';

import styles from './styles.module.scss';

const menuItems = [
    { href: '/dashboard', Icon: DashboardIcon, name: 'Dashboard' },
    { href: '/dashboard/about-us', Icon: InfoIcon, name: 'About Us' },
    { href: '/dashboard/team', Icon: TeamIcon, name: 'Team' },
    { href: '/dashboard/services', Icon: ServiceIcon, name: 'Services' },
    { href: '/dashboard/events', Icon: EventIcon, name: 'Events' },
    { href: '/dashboard/requests', Icon: RequestsIcon, name: 'Client requests' }
]

export default function SidebarMenu() {
    const [activeItem, setActiveItem] = useState<null | number>(null);
    const [isSettingsActive, setIsSettingsActive] = useState(false);

    const pathname = usePathname()

    useEffect(() => {
        const activeIndex = menuItems.findIndex(item => item.href === pathname)

        setActiveItem(activeIndex)
        setIsSettingsActive(pathname === '/dashboard/settings');
    }, [pathname])

    return (
        <>
            <nav className={styles.menu}>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <SidebarMenuItem href={item.href} Icon={item.Icon} name={item.name} active={activeItem === index} />
                        </li>
                    ))}
                </ul>
            </nav>

            <nav className={styles.settingsMenu}>
                <ul>
                    <li>
                        <SidebarMenuItem href='/dashboard/settings' Icon={SettingsIcon} name='Settings' active={isSettingsActive} />
                    </li>
                    <li>
                        <SidebarLogout />
                    </li>
                </ul>
            </nav>
        </>
    )
}
