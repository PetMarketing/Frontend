import React from 'react'

interface Props {
	fill: string
}

const Flower: React.FC<Props> = ({ fill }) => {
	return (
		<svg
			width='125'
			height='130'
			viewBox='0 0 125 130'
			xmlns='http://www.w3.org/2000/svg'
			filter='url(#filter)'
			preserveAspectRatio='xMidYMid slice'
		>
			<defs>
				<pattern id={`image-${fill}`} x='0' y='0' width='100%' height='100%'>
					<image
						x='0'
						y='0'
						width='117'
						height='120'
						xlinkHref={fill}
						preserveAspectRatio='xMidYMid slice'
					/>
				</pattern>
				<filter id='filter'>
					<feDropShadow
						dx='4'
						dy='4'
						stdDeviation='0'
						floodColor='#231F20'
						floodOpacity='1'
					/>
				</filter>
			</defs>
			<path
				d='M100.283 60.5273C139.452 106.369 103.282 143.533 58.6653 103.288C14.049 143.533 -22.1215 106.369 17.0479 60.5273C-22.1215 14.6855 14.049 -22.4784 58.6653 17.7668C103.282 -22.4784 139.452 14.6855 100.283 60.5273Z'
				fill={`url(#image-${fill})`}
			/>
		</svg>
	)
}

export default Flower
