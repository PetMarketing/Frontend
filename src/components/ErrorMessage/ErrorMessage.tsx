import styles from './ErrorMessage.module.scss'

export default function ErrorMessage({ err }: { err: string }) {
	return (
		<div className={styles.error}>
			{err}
		</div>
	);
}
