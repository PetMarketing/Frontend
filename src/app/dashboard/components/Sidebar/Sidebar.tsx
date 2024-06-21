import Logo from '@/components/Logo/Logo';

import styles from './Sidebar.module.scss';
import SidebarMenu from '../SidebarMenu/SidebarMenu';

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <Logo size='small' />
            </div>

            <SidebarMenu />
        </aside>
    )
}
