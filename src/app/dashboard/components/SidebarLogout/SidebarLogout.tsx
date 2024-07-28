'use client'

import Link from 'next/link';
import LogoutIcon from '@/assets/svg/logout-icon';

import styles from './SidebarLogout.module.scss';

export default function SidebarLogout() {
    return (
        <Link href='#!' className={styles.link} onClick={() => console.log('Logout')}>
            <div className={styles.icon}>
                <LogoutIcon />
            </div>
            Logout
        </Link>
    )
}
