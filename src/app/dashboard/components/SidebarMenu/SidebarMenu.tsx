import SidebarLogout from '../SidebarLogout/SidebarLogout';
import SidebarMenuItem from '../SidebarMenuItem/SidebarMenuItem';

import DashboardIcon from '@/assets/svg/dashboard-icon';
import ServiceIcon from '@/assets/svg/service-icon';
import InfoIcon from '@/assets/svg/info-icon';
import EventIcon from '@/assets/svg/event-icon';
import SettingsIcon from '@/assets/svg/settings-icon';
import RequestsIcon from '@/assets/svg/requests-icon';

import styles from './SidebarMenu.module.scss';

const menuItems = [
    { href: '/dashboard', Icon: DashboardIcon, name: 'Dashboard' },
    { href: '/dashboard/about-us', Icon: InfoIcon, name: 'About Us' },
    { href: '/dashboard/services', Icon: ServiceIcon, name: 'Services' },
    { href: '/dashboard/events', Icon: EventIcon, name: 'Events' },
    { href: '/dashboard/requests', Icon: RequestsIcon, name: 'Client requests' }
]

export default function SidebarMenu() {
    return (
        <>
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
                        <SidebarMenuItem href='/dashboard/settings' Icon={SettingsIcon} name='Settings' />
                    </li>
                    <li>
                        <SidebarLogout />
                    </li>
                </ul>
            </nav>
        </>
    )
}
