'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react';

import Logo from '@/components/Logo/Logo';
import SidebarMenuItem from '../SidebarMenuItem/SidebarMenuItem';
import SidebarLogout from '../SidebarLogout/SidebarLogout';

import DashboardIcon from '@/assets/svg/dashboard-icon';
import ServiceIcon from '@/assets/svg/service-icon';
import InfoIcon from '@/assets/svg/info-icon';
import EventIcon from '@/assets/svg/event-icon';
import SettingsIcon from '@/assets/svg/settings-icon';
import RequestsIcon from '@/assets/svg/requests-icon';
import LogoutIcon from '@/assets/svg/logout-icon';

import styles from './Sidebar.module.scss';

const menuItems = [
    { href: '/dashboard', Icon: DashboardIcon, name: 'Dashboard' },
    { href: '/dashboard/about-us', Icon: InfoIcon, name: 'About Us' },
    { href: '#!', Icon: ServiceIcon, name: 'Services' },
    { href: '#!', Icon: EventIcon, name: 'Events' },
    { href: '#!', Icon: RequestsIcon, name: 'Client requests' }
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

            <nav className={styles.settingsMenu}>
                <ul>
                    <li>
                        <SidebarMenuItem href='#!' Icon={SettingsIcon} name='Settings' />
                    </li>
                    <li>
                        <SidebarLogout />
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
