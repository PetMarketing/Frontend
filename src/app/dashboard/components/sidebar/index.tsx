'use client';

import { useEffect, useState } from 'react';

import Logo from '@/components/Logo/Logo';

import SidebarMenu from './ui/sidebar-menu';
import SidebarCloseButton from './ui/sidebar-close-button';

import { useSidebar } from '@/store/sidebar.store';

import styles from './styles.module.scss';

export default function Sidebar() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024)
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const isSidebarVisible = useSidebar((state) => state.isSidebarVisible);

    return (
        <aside className={`${styles.sidebar} ${isSidebarVisible ? styles.visible : ''}`}>
            <div className={styles.logo}>
                <Logo size='small' />

                {isMobile && <SidebarCloseButton />}
            </div>

            <SidebarMenu />
        </aside>
    )
}
