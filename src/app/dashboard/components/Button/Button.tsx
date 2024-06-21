'use client';

import styles from './Button.module.scss';

interface IButtonProps {
	text: string;
	onClick?: () => void;
	type?: 'submit' | 'button';
	className?: string;
	disabled?: boolean;
}

export default function Button({
	type = 'button',
	text,
	onClick,
	className = '',
	disabled = false
}: IButtonProps) {
	return (
		<button
			type={type}
			disabled={disabled}
			className={`${styles.button} ${className}`}
			onClick={onClick}
		>
			{text}
		</button>
	);
}
