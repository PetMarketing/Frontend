'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Button from '@/components/Button/Button'

import CloseIcon from '@/assets/svg/close-icon'

import styles from './Menu.module.scss'

const menuItems = [
	{ name: 'Home', route: '/' },
	{ name: 'Team', route: '/team' },
	{ name: 'Brief', route: '/brief' },
]

const Menu = () => {
	const [activeItem, setActiveItem] = useState<null | number>(null)
	const [isMobile, setIsMobile] = useState(false)
	const [showDropdown, setShowDropdown] = useState(false)
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 834)
		}

		handleResize()
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const pathname = usePathname()
	useEffect(() => {
		const activeIndex = menuItems.findIndex(item => item.route === pathname)
		setActiveItem(activeIndex)
	}, [pathname])

	const onMenuClick = () => {
		setShowDropdown(prevShowDropdown => !prevShowDropdown)
	}

	return (
		<div>
			{isMobile ? (
				<div className={styles.mobileMenu}>
					<button className={styles.mobileMenuBtn} onClick={onMenuClick}>
						<div>Menu</div>
					</button>
					{showDropdown && (
						<nav className={styles.mobileMenuDropdown}>
							<ul className={styles.menuBtns}>
								{menuItems.map((item, index) => (
									<li key={index}>
										<Link href={item.route}>
											<Button variant='menu' active={activeItem === index}>
												{item.name}
											</Button>
										</Link>
									</li>
								))}
							</ul>
							<button onClick={onMenuClick}>
								<CloseIcon />
							</button>
						</nav>
					)}
				</div>
			) : (
				<div className={styles.desktopMenu}>
					<nav>
						<ul className={styles.menuBtns}>
							{menuItems.map((item, index) => (
								<li key={index}>
									<Link href={item.route}>
										<Button variant='menu' active={activeItem === index}>
											{item.name}
										</Button>
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			)}
		</div>
	)
}

export default Menu
