'use client'

import Link from 'next/link';
import LogoutIcon from '@/assets/svg/logout-icon';

import { logout } from '@/services/auth/auth.service';

import styles from './SidebarLogout.module.scss';

export default function SidebarLogout() {
    return (
        <Link href='#!' className={styles.link} onClick={() => logout()}>
            <div className={styles.icon}>
                <LogoutIcon />
            </div>
            Logout
        </Link>
    )
}
