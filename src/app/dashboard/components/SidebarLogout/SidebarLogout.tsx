'use client'

import Link from 'next/link';
import { signOut } from 'next-auth/react';

import LogoutIcon from '@/assets/svg/logout-icon';

import styles from './SidebarLogout.module.scss';

export default function SidebarLogout() {
    return (
        <Link href='#!' className={styles.link} onClick={() => signOut({ callbackUrl: '/' })}>
            <div className={styles.icon}>
                <LogoutIcon />
            </div>
            Logout
        </Link>
    )
}
