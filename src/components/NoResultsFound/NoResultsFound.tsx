import Image from 'next/image'
import styles from './NoResultsFound.module.scss'

export default function NoResultsFound() {
    return (
        <div className={styles.noResultsFound}>
            <h2 className={styles.title}>Nothing here yet,<br />but stay tuned—excitement incoming!</h2>
            <div className={styles.imageWrapper}>
                <Image src='/graffiti-smile.png' width={338} height={358} alt='graffiti smile' className={styles.image} />
            </div>

        </div>
    )
}
