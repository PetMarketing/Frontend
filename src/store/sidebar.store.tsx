import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface IState {
    isSidebarVisible: boolean;
    toggleSidebar: () => void;
}

export const useSidebar = create<IState>()(
    devtools(
        persist(
            (set) => ({
                isSidebarVisible: false,
                toggleSidebar: () => set((state) => ({ isSidebarVisible: !state.isSidebarVisible })),
            }),
            {
                name: 'sidebar'
            },
        ),
        { name: 'Sidebar' }
    ),
);
