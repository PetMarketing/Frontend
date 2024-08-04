'use client'

import LogoutIcon from '@/assets/svg/logout-icon';

import { logout } from '@/services/auth/auth.service';

import styles from './styles.module.scss';

export default function SidebarLogout() {
    return (
        <button className={styles.link} onClick={() => logout()}>
            <div className={styles.icon}>
                <LogoutIcon />
            </div>
            Logout
        </button>
    )
}
