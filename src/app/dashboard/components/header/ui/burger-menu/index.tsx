'use client';

import BurgerIcon from '@/assets/svg/burger-icon';

import { useSidebar } from '@/store/sidebar.store';

import styles from './styles.module.scss';

export default function BurgerMenu() {
    const toggleSidebar = useSidebar((state) => state.toggleSidebar)

    return (
        <button className={styles.burger} onClick={toggleSidebar}>
            <BurgerIcon />
        </button>
    )
}
