'use client';

import Logo from '@/components/Logo/Logo';

import SidebarMenu from './ui/sidebar-menu';
import SidebarCloseButton from './ui/sidebar-close-button';

import { useIsMobile } from '@/hooks/useIsMobile';
import { useScrollControl } from '@/hooks/useScrollControl';

import { useSidebar } from '@/store/sidebar.store';

import styles from './styles.module.scss';

export default function Sidebar() {
    const isMobile = useIsMobile(1024);

    const toggleSidebar = useSidebar((state) => state.toggleSidebar)
    const isSidebarVisible = useSidebar((state) => state.isSidebarVisible);

    useScrollControl();

    return (
        <>
            <aside className={`${styles.sidebar} ${isSidebarVisible ? styles.visible : ''}`}>
                <div className={styles.logo}>
                    <Logo size='small' />

                    {isMobile && <SidebarCloseButton />}
                </div>

                <SidebarMenu />
            </aside>

            {isMobile && <div className={`${styles.backdrop} ${isSidebarVisible ? styles.visible : ''}`} onClick={toggleSidebar}></div>}
        </>
    )
}
