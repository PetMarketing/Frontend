import styles from './Container.module.scss'

type ContainerProps = {
	children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
	return <div className={styles.container}>{children}</div>
}
