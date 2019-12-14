import React, { Fragment, useState } from "react"
import styled from "@emotion/styled"
import { motion } from "framer-motion"

import Shape from "../assets/images/logo-shape.svg"
const colors = ["#4C1A57", "#FF3CC7", "#F0F600", "#00E5E8"]

const StarShape = styled(motion.div)`
	display: flex;
	overflow: hidden;
	width: ${props => props.starsSize}px;
	height: ${props => props.starsSize}px;
	margin: ${props => props.starsSpacing}px;
	position: relative;

	svg {
		display: block;
		width: 100%;
		height: 100%;
		fill: ${props => props.currentColor};
	}
`

const HoverAnimation = {
	scale: 1.5,
	rotate: 15,
}

const HoverAnimationSubtle = {
	scale: 1.1,
	rotate: 5,
}

const TapAnimation = {
	scale: 0.8,
	rotate: -5,
}

const Star = ({ starsHover, starsSize, starsSpacing }) => {
	const [colorIndex, setColorIndex] = useState(0)
	const currentColor = colors[colorIndex]

	const updateColorIndex = () => {
		if (colorIndex === colors.length - 1) {
			setColorIndex(0)
		} else {
			setColorIndex(colorIndex + 1)
		}
	}

	return (
		<Fragment>
			<StarShape
				whileHover={starsHover ? HoverAnimation : HoverAnimationSubtle}
				whileTap={!starsHover && TapAnimation}
				onMouseOver={starsHover ? updateColorIndex : undefined}
				onClick={!starsHover ? updateColorIndex : undefined}
				currentColor={currentColor}
				starsHover={starsHover}
				starsSpacing={starsSpacing}
				starsSize={starsSize}
			>
				<Shape />
			</StarShape>
		</Fragment>
	)
}

export default Star
