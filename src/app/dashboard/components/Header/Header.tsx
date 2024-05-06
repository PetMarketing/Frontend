'use client'

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

import styles from './Header.module.scss';

export default function Header() {
	const session = useSession();

	return (
		<header className={styles.header}>
			<div>HEADER</div>
			{session?.data && <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>signOut</Link>}
		</header>
	)
}

