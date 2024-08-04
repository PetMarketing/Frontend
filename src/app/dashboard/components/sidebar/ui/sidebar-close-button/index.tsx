'use client'

import CloseIcon from '@/assets/svg/close-icon';

import { useSidebar } from '@/store/sidebar.store';

import styles from './styles.module.scss';

export default function SidebarCloseButton() {
    const toggleSidebar = useSidebar((state) => state.toggleSidebar);

    return (
        <button className={styles.button} onClick={toggleSidebar}>
            <CloseIcon />
        </button>
    )
}
