import React from 'react'
import styles from './Loader.module.scss'

interface Props {
	className?: string
}

const Loader: React.FC<Props> = ({ className }) => {
	return (
		<div className={`${styles.loader} ${className}`}>
			<svg
				role='img'
				aria-label='Mouth and eyes come from 9:00 and rotate clockwise into position, right eye blinks, then all parts rotate and merge into 3:00'
				className={styles.smiley}
				viewBox='0 0 128 128'
				width='128px'
				height='128px'
			>
				<defs>
					<clipPath id='smiley-eyes'>
						<circle
							className={styles.smiley__eye1}
							cx='64'
							cy='64'
							r='8'
							transform='rotate(-40,64,64) translate(0,-56)'
						/>
						<circle
							className={styles.smiley__eye2}
							cx='64'
							cy='64'
							r='8'
							transform='rotate(40,64,64) translate(0,-56)'
						/>
					</clipPath>
					<linearGradient id='smiley-grad' x1='0' y1='0' x2='0' y2='1'>
						<stop offset='0%' stopColor='#000' />
						<stop offset='100%' stopColor='$white' />
					</linearGradient>
					<mask id='smiley-mask'>
						<rect x='0' y='0' width='128' height='128' />
					</mask>
				</defs>
				<g strokeLinecap='round' strokeWidth='12' strokeDasharray='175.93 351.86'>
					<g>
						<rect width='128' height='64' clipPath='url(#smiley-eyes)' />
						<g fill='none' stroke='hsl(193,90%,50%)'>
							<circle
								className={styles.smiley__mouth1}
								cx='64'
								cy='64'
								r='56'
								transform='rotate(180,64,64)'
							/>
							<circle
								className={styles.smiley__mouth2}
								cx='64'
								cy='64'
								r='56'
								transform='rotate(0,64,64)'
							/>
						</g>
					</g>
					<g mask='url(#smiley-mask)'>
						<rect width='128' height='64' clipPath='url(#smiley-eyes)' />
						<g fill='none' stroke='hsl(223,90%,50%)'>
							<circle
								className={styles.smiley__mouth1}
								cx='64'
								cy='64'
								r='56'
								transform='rotate(180,64,64)'
							/>
							<circle
								className={styles.smiley__mouth2}
								cx='64'
								cy='64'
								r='56'
								transform='rotate(0,64,64)'
							/>
						</g>
					</g>
				</g>
			</svg>
		</div>
	)
}

export default Loader
