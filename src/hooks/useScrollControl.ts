import { useEffect } from 'react'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useSidebar } from '@/store/sidebar.store'

/**
 * Custom hook to disable and enable scroll based on sidebar visibility.
 */
export function useScrollControl() {
	const isSidebarVisible = useSidebar(state => state.isSidebarVisible)
	const isMobile = useIsMobile(1024)

	useEffect(() => {
		if (!isMobile) return // We do nothing if it's not a mobile device

		const disableScroll = () => {
			const body = document.body
			const paddingOffset = window.innerWidth - body.offsetWidth + 'px'
			const pagePosition = window.scrollY

			body.style.paddingRight = paddingOffset
			body.classList.add('disable-scroll')
			body.dataset.position = pagePosition.toString()
			body.style.top = -pagePosition + 'px'
		}

		const enableScroll = () => {
			const body = document.body
			const pagePosition = parseInt(body.dataset.position || '0', 10)

			body.style.top = 'auto'
			body.classList.remove('disable-scroll')
			body.style.paddingRight = '0px'
			window.scrollTo({ top: pagePosition, left: 0, behavior: 'instant' })
			body.removeAttribute('data-position')
		}

		if (isSidebarVisible) {
			disableScroll()
		} else {
			enableScroll()
		}
	}, [isSidebarVisible])
}
