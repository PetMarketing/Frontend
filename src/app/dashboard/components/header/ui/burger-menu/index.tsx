'use client';

import BurgerIcon from '@/assets/svg/burger-icon';

import { useIsMobile } from '@/hooks/useIsMobile';
import { useSidebar } from '@/store/sidebar.store';

import styles from './styles.module.scss';

export default function BurgerMenu() {
    const isMobile = useIsMobile(1024);

    const toggleSidebar = useSidebar((state) => state.toggleSidebar)

    if (!isMobile) {
        return null;
    }

    return (
        <button className={styles.burger} onClick={toggleSidebar}>
            <BurgerIcon />
        </button>
    )
}
