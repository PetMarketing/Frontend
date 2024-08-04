'use client';

import styles from './Button.module.scss';

interface IButtonProps {
	text: string;
	onClick?: () => void;
	type?: 'submit' | 'button';
	variant?: 'primary' | 'black' | 'edit'
	className?: string;
	disabled?: boolean;
}

export default function Button({
	type = 'button',
	text,
	onClick,
	variant = 'primary',
	className = '',
	disabled = false,
}: IButtonProps) {
	return (
		<button
			type={type}
			disabled={disabled}
			className={`${styles.button} ${styles[variant]} ${className}`}
			onClick={onClick}
		>
			{text}
		</button>
	);
}
